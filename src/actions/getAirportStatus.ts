// http://servicos.cptec.inpe.br/XML/#req-estacoes-meteorologicas

import { MetarCode } from "../@types/TMetarCode";
import IAirportStatus from "../interfaces/IForecastStatus";
import api from "../utils/api";

async function getAirportStatus(code: MetarCode): Promise<IAirportStatus> {
    const res = await api.get(`/estacao/${code}/condicoesAtuais.xml`);
    const status: IAirportStatus = res.data.metar;
    return status;
}

export default getAirportStatus;
