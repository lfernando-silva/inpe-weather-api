// http://servicos.cptec.inpe.br/XML/#res-previsao-ondas
import ICity from "./ICity";

export interface IWavesPrevisao {
    dia: string;
    agitacao: string;
    altura: string;
    direcao: string;
    vento: string;
    vento_dir: string;
}

export default interface IWavesForecast extends ICity {
    manha: IWavesPrevisao;
    tarde: IWavesPrevisao;
    noite: IWavesPrevisao;
}