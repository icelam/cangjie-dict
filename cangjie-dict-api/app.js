const express = require('express');
const logger = require('morgan');

const router = require('./routes/index');

const app = express();

app.use(logger('dev'));

// middlewares for payloads
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use(router);

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send('error');
});

module.exports = app;
