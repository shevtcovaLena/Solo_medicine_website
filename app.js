require('@babel/register');

require('dotenv').config();
const express = require('express');
const morgan = require('morgan');

const session = require('express-session')
const FileStore = require('session-file-store')(session)

const { secureRout, checkUser } = require('./src/middlewares/common');

const path = require('path')

// const dbConnectionCheck = require('../db/dbConnectCheck');

const { PORT } = process.env;

const app = express();
// dbConnectionCheck();

const indexRoutes = require('./src/routes/indexRoutes');
const userRoutes = require('./src/routes/userRout');
const serviceRoutes = require('./src/routes/serviceRoutes');
const doctorRoutes = require('./src/routes/doctorRoutes');
const appointRoutes = require('./src/routes/appointRoutes');
const contactRoutes = require('./src/routes/contactRoutes');


const sessionConfig = {
  name: 'login',
  store: new FileStore(),
  secret: 'Секретное слово',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 9999999,
    httpOnly: true,
  }
}

app.use(morgan('dev'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(process.cwd(), 'public')));

app.use(session(sessionConfig));

app.use('/user', userRoutes);
app.use('/service', serviceRoutes);
app.use('/doctor', doctorRoutes);
app.use('/appoint', checkUser, appointRoutes);
app.use('/contact', contactRoutes);
app.use('/', indexRoutes);

app.listen(PORT ?? 3100, () => {
  console.log('Сервер запущен!');
});
