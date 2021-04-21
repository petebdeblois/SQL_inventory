const express = require('express');

const Company = require('./companies.model');
const queries = require('./companies.queries');
const router = express.Router();

// GET ALL
router.get('/', async (req, res, next) => {
  try {
    const companies = await Company.query().where('deleted_at', null);
    res.json(companies);
  } catch (error) {
    next(error);
  }
});

// GET 1
router.get('/:id', async (req, res, next) => {
  // this is grabbing the id from the params. api/v1/companies/ID
  const {
    id
  } = req.params;
  try {
    // TODO: should we validate the ID?
    const company = await queries.get(parseInt(id, 10) || 0);
    if (company) {
      return res.json(company);
    }
    return next();
  } catch (error) {
    return next(error);
  }
});

// POST
// UPDATE
// DELETE
module.exports = router;
