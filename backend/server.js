const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

const DBconnect = require('./DataBase/DB');

const port = process.env.PORT;

app.get('/test', (req, res) => {
    res.send('Server is running');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    DBconnect();
});