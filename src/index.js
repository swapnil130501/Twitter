import express from 'express';
import bodyParser from 'body-parser';
import {connect} from './config/database.js';
import apiRoutes from './routes/index.js';

const PORT = 3000;
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api', apiRoutes);

app.listen(PORT, async () => {
    console.log(`Server started at port ${PORT}`);
    await connect();
    console.log('Mongo db connected');
});