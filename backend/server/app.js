const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const serverPort = require('./etc/config.json').serverPort;
const db =require('./utils/DataBaseUtils.js');

db.setUpConnection();

const app = express();

app.use(cors());
app.use(bodyParser.json());

const server = app.listen(serverPort, () => {
    console.log('Server is running on ' + serverPort);
})