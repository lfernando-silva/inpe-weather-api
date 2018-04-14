const RequestHandler = require('./RequestHandler')

const query = '/cidade/codigo_da_localidade/condicoesAtuaisUV.xml'

module.exports = cityCode =>
    RequestHandler
        .query('get', `${query.replace('codigo_da_localidade',cityCode)}`)
        .then(res => res.uv)