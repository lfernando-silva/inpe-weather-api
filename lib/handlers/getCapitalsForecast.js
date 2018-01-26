const RequestHandler = require('./RequestHandler')

const query = '/capitais/condicoesAtuais.xml'

module.exports = () =>
    RequestHandler
        .query('get', `${query}`)
        .then(res => res.capitais.metar)