// http://servicos.cptec.inpe.br/XML/#req-previsao-ondas-todos
import { IWavesForecastExtended } from "../interfaces/IWavesForecast";
import api from "../utils/api";

async function getForecastWavesNextSixDaysByCode(code: string): Promise<IWavesForecastExtended> {
    const res = await api.get(`/cidade/${code}/todos/tempos/ondas.xml`);
    const status: IWavesForecastExtended = res.data.cidade;
    return status;
}

export default getForecastWavesNextSixDaysByCode;