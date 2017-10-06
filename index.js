//module.exports = require('./lib/index.js')
const InpeForecast = require('./lib/index.js')

InpeForecast.listCities().then(console.log)