import { Agitacao } from "../@types/TAgitacao";
import ICity from "./ICity";

export interface IWavesPrevisao {
    dia: string;
    agitacao: Agitacao;
    altura: string;
    direcao: string;
    vento: string;
    vento_dir: string;
}

// http://servicos.cptec.inpe.br/XML/#res-previsao-ondas-todos
export interface IWavesForecastExtended extends ICity {
    previsao: IWavesPrevisao[]
}

// http://servicos.cptec.inpe.br/XML/#res-previsao-ondas
export default interface IWavesForecast extends ICity {
    manha: IWavesPrevisao;
    tarde: IWavesPrevisao;
    noite: IWavesPrevisao;
}