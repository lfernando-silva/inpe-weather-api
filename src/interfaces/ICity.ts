// http://servicos.cptec.inpe.br/XML/#req-busca-localidade

import { UF } from "../@types/TUf";

export default interface ICity {
    nome: string;
    uf: UF;
    id: string;
    atualizacao?: string;
}