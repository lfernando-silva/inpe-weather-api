import axios from 'axios';
import JSONParser from 'xml2json';

const BASE_URI = 'http://servicos.cptec.inpe.br/XML/';
const DEFAULT_RESPONSE_TYPE = 'arraybuffer';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const transformData = (data: any) => {
    const str = data.toString('binary');

    if(str.match('não encontrada')){
        // Not found, does not throw code 404
        throw new Error('Not found');
    }

    if(str.match('Erro 500')){
        // Internal server error, does not throw code 500
        throw new Error('Error');
    }

    return JSON.parse(JSONParser.toJson(str));
}

const api = axios.create({
    baseURL: BASE_URI,
    responseType: DEFAULT_RESPONSE_TYPE,
    transformResponse: [transformData],
});

export default api;
