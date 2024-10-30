import Producer from '../model/producer.js';


export const getAllProducers = async (req, res) => {
    try {
        const producers = await Producer.find();
        res.json(producers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const addProducer = async (req, res) => {
    try {
        const { name, gender, dob, bio } = req.body;
        
     
        const producer = new Producer({
            name,
            gender,
            dob,
            bio
        });

     
        const savedProducer = await producer.save();
        res.status(201).json({ message: 'Producer added successfully', producer: savedProducer });
    } catch (error) {
        console.error('Error adding producer:', error);
        res.status(500).json({ error: 'Failed to add producer' });
    }
};