const db = require('../../db');

const tableNames = require('../../constants/tableNames');

const fields = ['id', 'name', 'website_url'];

module.exports = {
  find() {
    return db(tableNames.company).select(fields);
  },
  async get(id) {
    return db(tableNames.company)
      .select(fields)
      .where({
        id,
      })
      .first();
  },
};
