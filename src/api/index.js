const express = require('express');

const project = require('../constants/project');
const authMiddlewares = require('./auth/auth.middlewares');
const states = require('./states/states.routes');
const provinces = require('./provinces/provinces.routes');
const countries = require('./countries/countries.routes');
const users = require('./users/users.routes');
const addresses = require('./addresses/addresses.routes');
const companies = require('./companies/companies.routes');
const items = require('./items/items.routes');
const auth = require('./auth/auth.routes');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: project.message,
  });
});
// DOCS http://expressjs.com/en/guide/routing.html
router.use('/states', authMiddlewares.isLoggedIn, states);
router.use('/users', authMiddlewares.isLoggedIn, users);
router.use('/provinces', authMiddlewares.isLoggedIn, provinces);

router.use('/auth', auth);
router.use('/addresses', authMiddlewares.isLoggedIn, addresses);
router.use('/companies', authMiddlewares.isLoggedIn, companies);
router.use('/items', authMiddlewares.isLoggedIn, items);
router.use('/countries', countries);

module.exports = router;
