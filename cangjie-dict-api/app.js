const express = require('express');
const logger = require('morgan');

const router = require('./routes/index');

const app = express();

app.use(logger('dev'));

// middlewares for payloads
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// public assets - favicon, robot.txt, etc.
app.use(express.static('public'));

// routes
app.use(router);

// error handler
app.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  const errorCode = err.status || 500;

  res.status(errorCode).json({
    status: errorCode,
    message: req.app.get('env') === 'development' ? err.message : 'Internal Server Error'
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    status: 404,
    message: 'Not Found'
  });
});

module.exports = app;
