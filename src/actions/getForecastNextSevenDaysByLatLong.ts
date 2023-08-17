// http://servicos.cptec.inpe.br/XML/#req-previsao-7-dias

import ICityForecast from "../interfaces/ICityForecast";
import api from "../utils/api";

async function getForecastNextSevenDaysByLatLong(lat: string, long: string): Promise<ICityForecast> {
    const res = await api.get(`/cidade/7dias/${lat}/${long}/previsaoLatLon.xml`);
    const status: ICityForecast = res.data.cidade;
    return status;
}

export default getForecastNextSevenDaysByLatLong;