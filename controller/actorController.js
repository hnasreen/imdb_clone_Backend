import Actor from '../model/actor.js';

// Get all actors
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
        
        // Create a new actor
        const actor = new Actor({
            name,
            gender,
            dob,
            bio
        });

        // Save to the database
        const savedActor = await actor.save();
        res.status(201).json({ message: 'Actor added successfully', actor: savedActor });
    } catch (error) {
        console.error('Error adding actor:', error);
        res.status(500).json({ error: 'Failed to add actor' });
    }
};