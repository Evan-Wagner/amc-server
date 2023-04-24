import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const List = new Schema(
    {
        name: { type: String, required: true },
        spotifyPlaylistId: { type: String, required: false },
    },
    { timestamps: true },
);

const modelName = 'list';
const collectionName = 'lists';
console.log('Model', modelName, 'using collection', collectionName);

export default mongoose.model(modelName, List, collectionName);
