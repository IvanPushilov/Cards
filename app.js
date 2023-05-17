require('@babel/register');
const express = require('express');
// const morgan = require('morgan');
const path = require('path');
const getUser = require('./middleware/getUser');
const ssr = require('./middleware/renderComponent');

const app = express();
const PORT = process.env;

app.use(express.static(path.join(__dirname, 'public')));
app.use(getUser);
app.use(ssr);

// app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const indexRouter = require('./routes/index.routes');

app.use('/', indexRouter);

app.listen(PORT, () => {
  console.log(`Server_start_on_${PORT}_port`);
});
