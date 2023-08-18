// http://servicos.cptec.inpe.br/XML/#req-previsao-ondas

import { WaveDay } from "../@types/TWaveDay";
import IWavesForecast from "../interfaces/IWavesForecast";
import api from "../utils/api";

async function getForecastWaves(code: string, day: WaveDay = '0'): Promise<IWavesForecast> {
    const res = await api.get(`/cidade/${code}/dia/${day}/ondas.xml`);
    const status: IWavesForecast = res.data.cidade;
    return status;
}

export default getForecastWaves;