
const env = require('dotenv');
env.config();
const app = require('./app');
const express = require('express');
const  middleware = require('./app');
const port = process.env.PORT || 3000;

const expressApp = express();
middleware(expressApp);


expressApp.listen(port, () => {
    console.log('Server is listening on port', port)
});