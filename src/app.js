const express = require('express');
const morgan = require('morgan');
const compression = require('compression');
const helmet = require('helmet');

const middlewares = require('./middlewares');
const api = require('./api');
const project = require('./constants/project');

const app = express();

app.use(morgan('combined'));
app.use(compression());
app.use(helmet());
app.use(express.json());

// localhost:5050/
app.get('/', (req, res) => {
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
