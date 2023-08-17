import axios from 'axios';
import JSONParser from 'xml2json';

const BASE_URI = 'http://servicos.cptec.inpe.br/XML/';
const DEFAULT_RESPONSE_TYPE = 'arraybuffer';

const transformData = (data: any) => {
    const str = data.toString('binary');

    if(str.match('não encontrada')){
        // Not found, does not throw code 404
        throw new Error('Not found');
    }

    return JSON.parse(JSONParser.toJson(str));
}

const api = axios.create({
    baseURL: BASE_URI,
    responseType: DEFAULT_RESPONSE_TYPE,
    transformResponse: [transformData],
});

export default api;
