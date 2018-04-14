const FrontHandler = require('./handlers/FrontHandler.js')

module.exports = {
    getCities: FrontHandler.getHandler('getCities'),
    getAirportStatus: FrontHandler.getHandler('getAirportStatus'),
    getCapitalsForecast: FrontHandler.getHandler('getCapitalsForecast'),
    getForecast: FrontHandler.getHandler('getForecast'),
    getUVIncidence: FrontHandler.getHandler('getUVIncidence'),
    getWavesForecast: FrontHandler.getHandler('getWavesForecast')
}