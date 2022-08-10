const fs = require('fs');
const path = require('path');
const Papa = require('papaparse');

const csvData = fs.readFileSync(
  path.join(__dirname, '..', '..', 'db', 'sources', 'ca_provinces.csv'),
  'utf8'
);

const provinces = Papa.parse(csvData, {
  header: true,
});

module.exports = provinces.data.map(({ province: name, code }) => ({
  name,
  code,
}));
