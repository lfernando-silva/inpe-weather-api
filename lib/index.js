const FrontHandler = require('./handlers/FrontHandler.js')

module.exports = {
    getCities: cityOrPrefix => FrontHandler.getHandler('getCities')(cityOrPrefix),
    getAirportStatus: airportCode => FrontHandler.getHandler('getAirportStatus')(airportCode),
    getCapitalsForecast: () => FrontHandler.getHandler('getCapitalsForecast')()
}