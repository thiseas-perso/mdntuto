const path = require('path');
const express = require('express');
const morgan = require('morgan');

const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

//serving static files
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;
