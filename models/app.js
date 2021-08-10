const express = require('express');
const cors = require('cors');
const router = require('../routes/plataforma');
require('dotenv').config();

const { dbConnection } = require('../database/config');

const app = express();

app.use( cors() );
app.use( express.json() );

dbConnection();

app.use('/api/plataforma', router);

module.exports = app;