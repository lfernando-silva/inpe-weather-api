const FrontHandler = require('./handlers/FrontHandler.js')

module.exports = {
    listCities: cityOrPrefix => FrontHandler.getHandler('Cities').listCities(cityOrPrefix)
}