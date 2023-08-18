// http://servicos.cptec.inpe.br/XML/#res-previsao-4-dias

import { WeatherCondition } from "../@types/TWeatherConditions";
import ICity from "./ICity";

// http://servicos.cptec.inpe.br/XML/#res-previsao-7-dias
export interface IPrevisao {
    dia: string;
    tempo: WeatherCondition;
    maxima: string;
    minima: string;
    iuv: string;
}

export default interface ICityForecast extends ICity {
    previsao: IPrevisao[]
}