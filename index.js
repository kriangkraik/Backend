const express = require('express')
const bodyParser = require('body-parser');
const path = require('path');
const passport = require('passport');
const cookieSession = require('cookie-session');
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });

// import cors
const cors = require('cors')

// import routes
const EmployeesRouter = require('./routes/employees.routes')
const UserRouter = require('./routes/users.routes')
const HospitalRouter = require('./routes/hospital.routes')
const BookingRouter = require('./routes/booking.routes')
const Registration = require('./routes/registration.routes')
const PaymentRouter = require('./routes/payment.routes')

const app = express()
const port = process.env.PORT;


/* EJS is accessed by default in the views directory. */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

/* Allow access to 'public' folder where resources are available to this app */
app.use(express.static('public'));

/* use express json */
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

/* Parse incoming request bodies in a middleware before your handlers, available under the `req.body` property. */
app.use(bodyParser.urlencoded({ extended: true }));

/* cookie! */
app.use(cookieSession({
  maxAge: 24 * 60 * 60 * 1000,
  keys: ["Test"]
}));

/* Initialize passport */
app.use(passport.initialize());
app.use(passport.session());

/* Use cors */
app.use(cors());

/* use EmployeesRoute */
app.use('/employees', EmployeesRouter);

/* use UsersRoute */
app.use('/users', UserRouter);

/* use HospitalRoute */
app.use('/hospitals', HospitalRouter);

/* use BookingRoute */
app.use('/booking', BookingRouter);

/* use RegistrationRoute */
app.use('/registration', Registration);

/* use PaymentRoute */
app.use('/payment', PaymentRouter);


/* use HomePage */
app.get('/', (req, res) => {
  res.render("pages/index");
})

/* use Management Data */
app.get('/management', (req, res) => {
  res.render("pages/management");
});


/* Error handler middleware */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });
  return;
});

app.listen(port, () => {
  console.log(`Server Start listening on port ${port}`)
})