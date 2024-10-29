import mongoose from 'mongoose';

const actorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    gender: { type: String, required: true },
    dob: { type: Date, required: true },
    bio: { type: String },
});

export default mongoose.model('Actor',actorSchema)