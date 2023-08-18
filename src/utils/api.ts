import axios, { AxiosError, AxiosResponse } from 'axios';
import JSONParser from 'xml2json';

const BASE_URI = 'http://servicos.cptec.inpe.br/XML/';
const DEFAULT_RESPONSE_TYPE = 'arraybuffer';

const transformData = (data: AxiosResponse) => {
    const str = data.toString();

    if(str.match('não encontrada')){
        // Not found, does not throw code 404
        throw new AxiosError('Not found');
    }

    if(str.match('Erro 500')){
        // Internal server error, does not throw code 500
        throw new AxiosError('Error');
    }

    return JSON.parse(JSONParser.toJson(str));
}

const api = axios.create({
    baseURL: BASE_URI,
    responseType: DEFAULT_RESPONSE_TYPE,
    transformResponse: [transformData],
});

export default api;
