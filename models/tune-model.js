import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const Tune = new Schema(
    {
        name: { type: String, required: true },
        streamingUrls: { type: [[String, String]], required: true }, // Updated to store tuples
        endorsements: { type: [String], required: true },
    },
    { timestamps: true },
);

const modelName = 'tune';
const collectionName = 'brainstorm';
console.log('Model',modelName,'using collection', collectionName);

export default mongoose.model(modelName, Tune, collectionName);
