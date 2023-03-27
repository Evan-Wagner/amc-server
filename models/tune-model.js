import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const Tune = new Schema(
    {
        name: { type: String, required: true },
        streamingUrls: { type: [[String, String]], required: true },
        endorsements: { type: [String], required: false },
        description: { type: String, required: false },
    },
    { timestamps: true },
);

const modelName = 'tune';
const collectionName = 'brainstorm';
console.log('Model',modelName,'using collection', collectionName);

export default mongoose.model(modelName, Tune, collectionName);
