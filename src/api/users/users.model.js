const { Model } = require('objection');

const tableNames = require('../../constants/tableNames');
const schema = require('./users.schema.json');

class User extends Model {
  static get tableName() {
    return tableNames.user;
  }

  // DOCS https://vincit.github.io/objection.js/guide/models.html#examples
  // DOCS https://jsonschema.net to generate the jsonSchema
  static get jsonSchema() {
    return schema;
  }
}

module.exports = User;
