const RequestHandler = require('./RequestHandler')

const query = '/cidade/QUERY/ISLATLONG.xml'

const getSevenDaysQuery = (cityCode, nextSevenDays, isExtended) =>
    (nextSevenDays && !isExtended
    ? '7dias/codigo_da_localidade'
    : 'codigo_da_localidade')
    .replace('codigo_da_localidade',cityCode)

const getExtendedLatLongQuery = (isLatLong, isExtended) => {
    const previsao = 'previsao#'
    const estendida = 'estendida#'

    return (isExtended ? estendida : previsao)
        .replace('#', `${isLatLong ? 'LatLon': ''}`)
}

const formatQuery = (cityCode, nextSevenDays, isLatLong, isExtended) =>
    query
        .replace('QUERY', getSevenDaysQuery(cityCode,nextSevenDays, isExtended))
        .replace('ISLATLONG', `${getExtendedLatLongQuery(isLatLong, isExtended)}`)

module.exports = (cityCode, nextSevenDays, isLatLong, isExtended) => {
    const q = formatQuery(cityCode, nextSevenDays, isLatLong, isExtended)
    return RequestHandler
        .query('get', `${q}`)
        .then(res => res.cidade)
}