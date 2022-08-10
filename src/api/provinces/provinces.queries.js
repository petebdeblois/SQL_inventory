const db = require('../../db');

const tableNames = require('../../constants/tableNames');

const fields = ['id', 'name', 'code'];

module.exports = {
  find() {
    // TODO: filter by country
    // TODO: join to country table
    return db(tableNames.province).select(fields);
  },
  async get(id) {
    return db(tableNames.province)
      .select(fields)
      .where({
        id,
      })
      .first();
  },
};
