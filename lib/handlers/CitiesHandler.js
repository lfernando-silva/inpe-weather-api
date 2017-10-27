const RequestHandler = require('./RequestHandler')

const query = 'listaCidades?city='

module.exports = {
    listCities: cityOrPrefix =>
        RequestHandler
            .query('get', `${query}${cityOrPrefix || ''}`)
            .then(res => res.cidades? res.cidades.cidade : res)
}