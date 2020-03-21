const express = require('express');
const server = express();

const {PORT} = require('./config/index.js');


server.listen(PORT, () => {
    console.log( ` Application running on PORT ${PORT}` );
});