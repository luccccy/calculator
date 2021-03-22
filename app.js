const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const index = require('./routes/index');
const calculator = require('./routes/calculator');
const calculatorlucy = require('./routes/calculatorlucy');
const calculatorsimple = require('./routes/calculatorsimple');
const icalculator = require('./routes/icalculator');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/calculator', calculator);
app.use('/calculatorlucy', calculatorlucy);
app.use('/calculatorsimple', calculatorsimple);
app.use('/icalculator', icalculator);

module.exports = app;
