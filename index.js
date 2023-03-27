import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import db from './dbs/tune-db.js';
import tuneRouter from './routes/tune-router.js';

console.log('test');

const app = express();
const apiPort = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
    origin: '*',
    optionsSuccessStatus: 200,
}));
app.use(bodyParser.json());

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/api', tuneRouter);

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));

export default app;