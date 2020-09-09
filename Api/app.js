var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var swaggerUi = require('swagger-ui-express');
var swaggerDoc = require('./swagger.json');
var bcrypt = require("bcryptjs");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var authRouter = require('./routes/authRoute');
var menuRouter = require('./routes/menuRoute');
var reservationRouter = require('./routes/reservationRoute');
var restConfRouter = require('./routes/restConfRoute');

var app = express();
var mongoose = require('mongoose');
const User = require('./models/User');
const RestConf = require('./models/RestConf');

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
  .then(async() => {
    console.log('connection succesful');
    const admin = await User.findOne({tipo: "Admin"}).select("+password");
    const confRest = await RestConf.findOne({});
    if(!admin){
      var hashedPassword = bcrypt.hashSync("12345", 8);
      admin = await new User({
        email: "8160567@estg.ipp.pt",
        password: hashedPassword,
        tipo: "Admin",
        contacto: "963942517"
      })
        .save()
        .catch(console.error);

    } 
    
    if(!confRest){
      confRest = await new RestConf({
        numMaxP: 40,
        openTimeLunch: "2020-08-31T11:00:00.000Z",
        closeTimeLunch: "2020-08-31T14:00:00.000Z",
        openTimeDinner: "2020-08-31T19:00:00.000Z",
        closeTimeDinner: "2020-08-31T22:00:00.000Z",
        timeToEat: 30,
        timeAvailable: ["12:00","12:30","13:00","13:30","14:00","14:30","15:00","20:00","20:30","21:00","21:30","22:00","22:30","23:00"]
      })
      .save()
      .catch(console.error);
    }

    if(admin && confRest){
      console.log("Admin:");
      console.table([admin.toJSON()]);
      console.log("Conf Rest");
      console.table([confRest.toJSON()]);
    }
  })
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
