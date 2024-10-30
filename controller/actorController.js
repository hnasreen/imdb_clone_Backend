import Actor from '../model/actor.js';


export const getAllActors = async (req, res) => {
    try {
        const actors = await Actor.find();
        res.json(actors);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const addActor = async (req, res) => {
    try {
        const { name, gender, dob, bio } = req.body;
        
        
        const actor = new Actor({
            name,
            gender,
            dob,
            bio
        });

      
        const savedActor = await actor.save();
        res.status(201).json({ message: 'Actor added successfully', actor: savedActor });
    } catch (error) {
        console.error('Error adding actor:', error);
        res.status(500).json({ error: 'Failed to add actor' });
    }
};