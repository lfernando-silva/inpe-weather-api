const getCities = require('./handlers/getCities')
const getAirportStatus = require('./handlers/getAirportStatus')
const getCapitalsForecast = require('./handlers/getCapitalsForecast')
const getForecast = require('./handlers/getForecast')
const getUVIncidence = require('./handlers/getUVIncidence')
const getWavesForecast = require('./handlers/getWavesForecast')

module.exports = {
    getCities,
    getAirportStatus,
    getCapitalsForecast,
    getForecast,
    getUVIncidence,
    getWavesForecast,
}