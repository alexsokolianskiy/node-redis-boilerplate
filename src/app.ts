import { Application } from 'express';
import express = require('express');
const bodyParser = require('body-parser');
//TODO FIX BUILD ERRORS  WITH XADESJS
import { SignedXml, Parse, Application as App } from 'xadesjs';

const app: Application = express();
const port: number = +(process.env.PORT ?? '3000');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', (req, res) => {
    res.send('Hello World');
});

app.listen(port, () => {
    console.log(`Worker process ${process.pid} listening on port ${port}`);
});
