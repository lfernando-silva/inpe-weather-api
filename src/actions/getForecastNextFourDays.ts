// http://servicos.cptec.inpe.br/XML/#req-previsao-4-dias

import ICityForecast from "../interfaces/ICityForecast";
import api from "../utils/api";

async function getForecastNextFourDays(cityCode: string): Promise<ICityForecast> {
    const res = await api.get(`/cidade/${cityCode}/previsao.xml`);
    const status: ICityForecast = res.data.cidade;
    return status;
}

export default getForecastNextFourDays;