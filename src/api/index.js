const express = require('express');

const project = require('../constants/project');
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
router.use('/states', states);
router.use('/provinces', provinces);
router.use('/users', users);
router.use('/auth', auth);
router.use('/addresses', addresses);
router.use('/companies', companies);
router.use('/items', items);
router.use('/countries', countries);

module.exports = router;
