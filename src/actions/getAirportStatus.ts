import TMetarCodes from "../@types/TMetarCodes";
import IAirportStatus from "../interfaces/IAirportStatus";
import api from "../utils/api";

async function getAirportStatus(code: TMetarCodes): Promise<IAirportStatus> {
    const res = await api.get(`/estacao/${code}/condicoesAtuais.xml`);
    const status: IAirportStatus = res.data.metar;
    return status;
}

export default getAirportStatus;
