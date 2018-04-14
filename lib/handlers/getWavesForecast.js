const RequestHandler = require('./RequestHandler')

const query = '/cidade/codigo_da_localidade/QUERY/ondas.xml'

const getWaveQuery = (day) => {
    return ([0, 1, 2].filter(e => e === parseInt(day)).length === 0)
        ? 'todos/tempos'
        : `dia/${day}`
}

const formatQuery = (cityCode, day) => query
    .replace('codigo_da_localidade', cityCode)
    .replace('QUERY', getWaveQuery(day))

module.exports = (cityCode, day) =>
    RequestHandler
        .query('get', `${formatQuery(cityCode, day)}`)
        .then(res => {
            if(res.cidade.nome === 'undefined'){
                throw new Error({status:500})
            }
            return res.cidade
        })