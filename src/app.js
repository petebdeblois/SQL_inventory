const express = require('express');
const morgan = require('morgan');
const compression = require('compression');
const helmet = require('helmet');
const middlewares = require('./middlewares');
const api = require('./api');
const project = require('./constants/project');
const authMiddlewares = require('./api/auth/auth.middlewares');

const app = express();

/*
Those are all middlewares and are executed Top to bottom
*/
// Morgan logs the incoming request
app.use(morgan('combined'));
// compresses the request and decompress the incoming request
app.use(compression());
// Helmet helps you secure your Express apps by setting various HTTP headers.
app.use(helmet());
app.use(express.json());

app.use(authMiddlewares.setUserFromTokenIfValid);

/* eslint no-console: ["error", { allow: ["warn", "error", "log"] }] */
app.use((req, res, next) => {
  console.log('Example of Middlewares and Next()');
  console.log('It runs for every routes');
  next();
});
app.use('/api', (req, res, next) => {
  console.log('It only runs for /api');
  next();
});

let count = 0;
const increaseCount = (req, res, next) => {
  count += 1;
  console.log('The count is: ', count);
  next();
};

// localhost:5050/
app.get('/', increaseCount, (req, res) => {
  res.json({
    message: project.message,
  });
});
// this add api/v1 to localhost:5050/
// it uses the router.use in api/index.js
app.use('/api/v1', api);

app.use(middlewares.notFound);
// we always want the last to be errorHandle
app.use(middlewares.errorHandler);

module.exports = app;
