import express from 'express';
import {connect} from './config/database.js';
const app = express();
const PORT = 3000;

import service from './services/tweet-service.js';

app.listen(PORT, async () => {
    console.log(`Server started at port ${PORT}`);
    await connect();
    console.log('Mongo db connected');
    let ser = new service();
    await ser.create({content: 'to #es6 module'});
});