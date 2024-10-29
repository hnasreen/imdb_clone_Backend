import mongoose from 'mongoose';

const ProducerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    gender: { type: String, required: true },
    dob: { type: Date, required: true },
    bio: { type: String, required: true }
});


export default mongoose.model('Producer', ProducerSchema)