// http://servicos.cptec.inpe.br/XML/#req-busca-localidade
import ICity from "../interfaces/ICity";
import api from "../utils/api";

async function getCities(city?: string): Promise<ICity[]> {
    const res = await api.get('/listaCidades', { params: { city }});
    const status: ICity[] = res.data.cidades.cidade;
    return status;
}

export default getCities; 