// http://servicos.cptec.inpe.br/XML/#req-estacoes-meteorologicas

import TMetarCodes from "../@types/TMetarCodes";
import IAirportStatus from "../interfaces/IForecastStatus";
import api from "../utils/api";

async function getAirportStatus(code: TMetarCodes): Promise<IAirportStatus> {
    const res = await api.get(`/estacao/${code}/condicoesAtuais.xml`);
    const status: IAirportStatus = res.data.metar;
    return status;
}

export default getAirportStatus;
