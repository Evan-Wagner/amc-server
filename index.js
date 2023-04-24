import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import musicDb from './dbs/music-db.js';
import tuneRouter from './routes/tune-router.js';
import trackRouter from './routes/track-router.js';
import listRouter from './routes/list-router.js';

const app = express();
const apiPort = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
    origin: '*',
    optionsSuccessStatus: 200,
}));
app.use(bodyParser.json());

musicDb.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/tunes', tuneRouter);
app.use('/tracks', trackRouter);
app.use('/lists', listRouter);

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));

export default app;