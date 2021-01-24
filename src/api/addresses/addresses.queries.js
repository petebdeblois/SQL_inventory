const db = require('../../db');

const tableNames = require('../../constants/tableNames');

const fields = ['id', 'street_address_1', 'city'];

module.exports = {
  find() {

    return db(tableNames.address).select(fields);
  },
  async get(id) {
    return db(tableNames.address)
      .select(fields)
      .where({
        id,
      })
      .first();
  },
};
