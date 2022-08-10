const express = require('express');

const queries = require('./provinces.queries');

const router = express.Router();

router.get('/', async (req, res) => {
  const provinces = await queries.find();
  res.json(provinces);
});

router.get('/:id', async (req, res, next) => {
  // this is grabbing the id from the params. api/v1/provinces/ID
  const { id } = req.params;
  try {
    // TODO: should we validate the ID?
    const province = await queries.get(parseInt(id, 10) || 0);
    if (province) {
      return res.json(province);
    }
    return next();
  } catch (error) {
    return next(error);
  }
});

module.exports = router;
