// http://servicos.cptec.inpe.br/XML/#req-estacoes-meteorologicas
import ICapitalStatus from "../interfaces/IForecastStatus";
import api from "../utils/api";

async function getCapitalsStatuses(): Promise<ICapitalStatus[]> {
    const res = await api.get('/capitais/condicoesAtuais.xml');
    const status: ICapitalStatus[] = res.data.capitais.metar;
    return status;
}

export default getCapitalsStatuses;
