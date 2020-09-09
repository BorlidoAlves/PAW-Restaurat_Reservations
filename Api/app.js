var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var swaggerUi = require('swagger-ui-express');
var swaggerDoc = require('./swagger.json');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var authRouter = require('./routes/authRoute');
var menuRouter = require('./routes/menuRoute');
var reservationRouter = require('./routes/reservationRoute');
var restConfRouter = require('./routes/restConfRoute');

var app = express();
var mongoose = require('mongoose');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/apiDoc', swaggerUi.serve, swaggerUi.setup(swaggerDoc));
app.use('/api', authRouter, menuRouter, reservationRouter, restConfRouter);
app.use('/index', indexRouter);
app.use('/users', usersRouter);



mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/PjEspecial',{ useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('connection succesful'))
  .catch((err) => console.log(err));

mongoose.set('useCreateIndex', true);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
