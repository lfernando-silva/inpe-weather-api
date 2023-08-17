// http://servicos.cptec.inpe.br/XML/#req-previsao-7-dias

import ICityForecast from "../interfaces/ICityForecast";
import api from "../utils/api";

async function getForecastExtendedByLatLong(lat: string, long: string): Promise<ICityForecast> {
    const res = await api.get(`/cidade/${lat}/${long}/estendidaLatLon.xml`);
    const status: ICityForecast = res.data.cidade;
    return status;
}

export default getForecastExtendedByLatLong;