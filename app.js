const path = require('path');
const express = require('express');
const morgan = require('morgan');

const usersRouter = require('./routes/userRoutes');
const indexRouter = require('./routes/indexRoutes');

const app = express();

//set view engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

//serving static files
app.use(express.static(path.join(__dirname, 'public')));

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.all('*', (req, res, next) => {
  res.status(404).send(`${req.originalUrl}  not found !`);
});

module.exports = app;
