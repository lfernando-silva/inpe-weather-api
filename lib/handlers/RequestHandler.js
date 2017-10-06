const axios = require('axios')
const JSONParser = require('xml2json')
const baseURL = 'http://servicos.cptec.inpe.br/XML/'
//text/xml;charset=ISO-8859-1

const transformResponse = (data,headers) => {
    return data
}

const configs = {
    responseType: 'arraybuffer',
    baseURL,
    transformResponse
}

module.exports = {
    query: (method,url) => axios(Object.assign(configs,{method,url}))
        .then(res => res.data.toString('binary'))
        .then(JSONParser.toJson)
        .then(JSON.parse)
}