// http://servicos.cptec.inpe.br/XML/#res-previsao-4-dias
// http://servicos.cptec.inpe.br/XML/#res-previsao-7-dias
export interface IPrevisao {
    dia: string;
    tempo: WeatherCondition;
    maxima: string;
    minima: string;
    iuv: string;
}

export default interface ICityForecast {
    nome: string;
    uf: UF;
    atualizacao: string;
    previsao: IPrevisao[]
}