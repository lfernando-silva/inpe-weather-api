const axios = require('axios')
const JSONParser = require('xml2json')
const baseURL = 'http://servicos.cptec.inpe.br/XML/'

const configs = {
    responseType: 'arraybuffer',
    baseURL
}

module.exports = {
    query: (method,url) => axios(Object.assign(configs,{method,url}))
        .then(res => res.data.toString('binary'))
        .then(JSONParser.toJson)
        .then(JSON.parse)
}