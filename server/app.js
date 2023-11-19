const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();
const path = require('path');
const rootRoutes = require('./routes/root');
const userRoutes = require('./routes/user');
const authRoutes = require('./routes/auth');
const compression = require('compression')
const helmet = require('helmet')
const logger = require('morgan')

const app = express();

app.use(express.static(path.join(__dirname,'public')));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(compression())
app.use(helmet())
app.use(logger('dev'))

app.use('/api/v1',rootRoutes);
app.use('/api/v1/auth',authRoutes);
app.use('/api/v1/user',userRoutes);

module.exports = app