import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const uri = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_SERVER}/music`;

mongoose
    .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB: music'))
    .catch(e => {
        console.error('Connection error', e.message)
    })

const musicDb = mongoose.connection

export default musicDb;