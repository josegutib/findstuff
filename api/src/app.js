const express = require('express');
const morgan = require('morgan')
const json = require('express')
const apiRoutes = require('./routes/api');
const cors = require('cors');
const bodyParser = require('body-parser'); 

const app = express();

app.use(bodyParser.json({ limit: '50mb' })); 

//middlewares
app.use(morgan('dev'))
//app.use(json());
app.use(cors())

//rutas
app.use('/api/search',apiRoutes);

module.exports = app;

