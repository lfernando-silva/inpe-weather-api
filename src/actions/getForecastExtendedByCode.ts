// http://servicos.cptec.inpe.br/XML/#req-previsao-estendida

import ICityForecast from "../interfaces/ICityForecast";
import api from "../utils/api";

async function getForecastExtendedByCode(cityCode: string): Promise<ICityForecast> {
    const res = await api.get(`/cidade/${cityCode}/estendida.xml`);
    const status: ICityForecast = res.data.cidade;
    return status;
}

export default getForecastExtendedByCode;