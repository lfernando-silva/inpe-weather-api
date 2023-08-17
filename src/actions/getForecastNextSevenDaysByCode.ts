// http://servicos.cptec.inpe.br/XML/#req-previsao-7-dias

import ICityForecast from "../interfaces/ICityForecast";
import api from "../utils/api";

async function getForecastNextSevenDaysByCode(cityCode: string): Promise<ICityForecast> {
    const res = await api.get(`/cidade/7dias/${cityCode}/previsao.xml`);
    const status: ICityForecast = res.data.cidade;
    return status;
}

export default getForecastNextSevenDaysByCode;