const RequestHandler = require('./RequestHandler')

const query = '/estacao/codigo_da_estacao/condicoesAtuais.xml'

module.exports = airportCode =>
    RequestHandler
        .query('get', `${query.replace('codigo_da_estacao',airportCode)}`)
        .then(res => res.metar)