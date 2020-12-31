const express = require('express');

const User = require('./users.model');

const router = express.Router();

router.get('/', async (req, res) => {
  // DOCS https://vincit.github.io/objection.js/api/model/static-methods.html#static-query
  const users = await User.query()
    .select('id', 'email', 'name', 'created_at', 'updated_at')
    .where('deleted_at', null);
  res.json(users);
});

// TODO 


module.exports = router;
