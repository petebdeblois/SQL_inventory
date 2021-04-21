const express = require('express');

const queries = require('./countries.queries');

const router = express.Router();

router.get('/', async (req, res) => {
  const countries = await queries.find();
  res.json(countries);
});

router.get('/:id', async (req, res, next) => {
  // this is grabbing the id from the params. api/v1/countries/ID
  const { id } = req.params;
  try {
    // TODO: should we validate the ID?
    const country = await queries.get(parseInt(id, 10) || 0);
    if (country) {
      return res.json(country);
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
