import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const Track = new Schema(
    {
        title: { type: String, required: true },
        url: { type: String, required: true },
        source: { type: String, required: true },
        imageUrl: { type: String, required: false },
    },
    { timestamps: true },
);

const modelName = 'track';
const collectionName = 'tracks';
console.log('Model',modelName,'using collection', collectionName);

export default mongoose.model(modelName, Track, collectionName);
