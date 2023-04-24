import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const Tune = new Schema(
    {
        name: { type: String, required: true },
        tracks: { type: [String], required: false },
        lists: { type: [String], required: true },
        endorsements: { type: [String], required: false },
        description: { type: String, required: false },
    },
    { timestamps: true },
);

const modelName = 'tune';
const collectionName = 'tunes';
console.log('Model',modelName,'using collection', collectionName);

export default mongoose.model(modelName, Tune, collectionName);
