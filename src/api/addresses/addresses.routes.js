const express = require('express');

const Address = require('./addresses.model');
const queries = require('./addresses.queries');
const router = express.Router();

// GET ALL
router.get('/', async (req, res, next) => {
  try {
    const addresses = await Address.query().where('deleted_at', null);
    res.json(addresses);
  } catch (error) {
    next(error);
  }
});
//GET 1 
router.get('/:id', async (req, res, next) => {
  // this is grabbing the id from the params. api/v1/addresses/ID
  const {
    id
  } = req.params;
  try {
    const addresses = await queries.get(parseInt(id, 10) || 0);
    if (addresses) {
      return res.json(addresses);
    }
    return next();
  } catch (error) {
    return next(error);
  }
});
// POST
router.post('/', async (req, res, next) => {
  try {
    ['street_address_1', 'street_address_2', 'city', 'zipcode'].forEach(
      (prop) => {
        if (req.body[prop]) {
          req.body[prop] = req.body[prop].toString().toLowerCase().trim();
        }
      }
    );
    const address = await Address.query().insert(req.body);
    res.json(address);
  } catch (error) {
    next(error);
  }
});

// UPDATE
// DELETE

module.exports = router;
