import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const uri = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_SERVER}/${process.env.MONGO_TUNE_DB}`;

mongoose
    .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB:',process.env.MONGO_TUNE_DB))
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

export default db;