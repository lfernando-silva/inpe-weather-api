# INPE Weather API

A NodeJS wrapper for the Weather Forecast Webservice provided by Brazil's [Instituto Nacional de Pesquisas Espaciais - INPE](https://www.gov.br/inpe/pt-br).

Check out WS API into [INPE's](http://servicos.cptec.inpe.br/XML/) Weather Forecast Webservice docs for more information.

## CHANGELOG

- See the [changelog](./CHANGELOG.md) for other changes.
- For previous releases, see the releases page [https://www.npmjs.com/package/inpe-weather-api?activeTab=versions]

## Pre-requirements:

* [Node.js](https://nodejs.org/) - 16.x or higher (we do recommend using the LTS version)

## Getting started

## Install

- Latest version
```sh
$ npm install --save inpe-weather-api
```

- Specific version
```sh
$ npm install --save inpe-weather-api@TAG
```

## Usage
* Import the module to the code

```js
//commonJS require
const InpeForecast = require('inpe-weather-api');

// Individual function require
const { getAirportStatus } = require('inpe-weather-api');

// Import
import * as InpeForecast from 'inpe-weather-api';

// Individual import
const { getCapitalsStatuses, getCities } = require('inpe-weather-api');
```

### Types

| Reference  | Type  | Possible Values |
| ------------ | ------------ | ------------ |
| [Agitação](http://servicos.cptec.inpe.br/XML/#res-previsao-ondas)  | Agitacao  | `Fraco`, `Moderado`, `Forte`
|  [Metar Code](http://servicos.cptec.inpe.br/XML/#estacoes-metar) |   MetarCode | Multiple values
|   [UF](https://pt.wikipedia.org/wiki/Unidades_federativas_do_Brasil#Lista_sintética) |  UF | Multiple values
|   [Wave Day](http://servicos.cptec.inpe.br/XML/#req-previsao-ondas)| WaveDay  | `0`, `1`, `2`
| [Weather Condition](http://servicos.cptec.inpe.br/XML/#condicoes-tempo) | WeatherCondition | Multiple values

### Interfaces

#### Usage
```ts
import * as InpeWeatherApiTypes from 'inpe-weather-api/dist/interfaces';
```

- City

```js
export default interface ICity {
    nome: string;
    uf: UF;
    id: string;
    atualizacao?: string;
}
```
- City Forecast

```js
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
```

- Forecast Status

```js
export default interface IForecastStatus {
    codigo: string;
    atualizacao: string;
    pressao: string;
    temperatura: string;
    tempo: string;
    tempo_desc: string;
    umidade: string;
    vento_dir: string;
    vento_int: string;
    visibilidade: string;
}
```

- Waves Forecast

```js
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
```

### API

##### **Please note all functions are async (return promises)**

##
```ts  
getAirportStatus(code: MetarCode): Promise<IForecastStatus>
```
- Obtain the current forecast for a [Airport Weather Station](http://servicos.cptec.inpe.br/XML/#req-estacoes-meteorologicas). Please check the `MetarCode` type definition to see which values are available.
##
```ts 
getCapitalsStatuses(): Promise<IForecastStatus>
```
- Obtain the current forecast for all [Airport Weather Stations](http://servicos.cptec.inpe.br/XML/#req-estacoes-meteorologicas) in Brazil capitals.

##
```ts 
getCities(city?: string): Promise<ICity[]>
```
- Obtain a list of cities that matches the `city` parameter, that is usually the name of the city or a prefix. Although this parameter is not required, not passing it does not return all cities.
- Note that `city` *is not* a regex, but a prefix. For example, "são paulo" will return a list of cities that match "São Paulo" on their names.
- Also note that `city` should be in brazillian portuguese.

##
```ts 
getForecastExtendedByCode(cityCode: string): Promise<ICityForecast>
```
- Obtain a [extended forecast](http://servicos.cptec.inpe.br/XML/#req-previsao-estendida) for a city by its `code`. By "extended" it means the forecast for the seven days after the next seven days forecast.
- According to the docs, this code should be obtained in the response of `getCities(city)` request.

##
```ts 
getForecastExtendedByLatLong(lat: string, long: string): Promise<ICityForecast>
```
- Obtain a [extended forecast](http://servicos.cptec.inpe.br/XML/#req-previsao-estendida) for a city by its lat/long coords. By "extended" it means the forecast for the seven days after the next seven days forecast.
- The coords are not given. For not-Brazil coordinates, it seems to return "São Paulo" forecast by default.

##
```ts 
getForecastNextFourDays(cityCode: string): Promise<ICityForecast>
```
- Obtain a [next four days forecast](http://servicos.cptec.inpe.br/XML/#req-previsao-4-dias) for a city by its `code`.
- According to the docs, this code should be obtained in the response of `getCities(city)` request.

##
```ts 
getForecastNextSevenDaysByCode(cityCode: string): Promise<ICityForecast>
```
- Obtain a [next seven days forecast](http://servicos.cptec.inpe.br/XML/#req-previsao-7-dias) for a city by its `code`.
- According to the docs, this code should be obtained in the response of `getCities(city)` request.
##
```ts 
getForecastNextSevenDaysByLatLong(lat: string, long: string): Promise<ICityForecast>
```
- Obtain a [next seven days forecast](http://servicos.cptec.inpe.br/XML/#req-previsao-7-dias) for a city by its lat/long coords.
- The coords are not given. For not-Brazil coordinates, it seems to return "São Paulo" forecast by default.

##
```ts 
getForecastWaves(code: string, day: WaveDay = '0'): Promise<IWavesForecast>
```
- Obtain a [sea waves forecast](http://servicos.cptec.inpe.br/XML/#req-previsao-ondas) for a coast city by its `code` for today (`0` - default ), tomorrow (`1`) or after tomorrow (`2`).
- According to the docs, this code should be obtained in the response of `getCities(city)` request.
- It only works cities on the Brazilian coast; this info must be known by the user.

##
```ts 
getForecastWavesNextSixDaysByCode(code: string): Promise<IWavesForecastExtended>
```
- Obtain a [sea waves forecast for next six days every three hours](http://servicos.cptec.inpe.br/XML/#req-previsao-ondas-todos) for a coast city by its `code` for today (`0` - default ), tomorrow (`1`) or after tomorrow (`2`).
- According to the docs, this code should be obtained in the response of `getCities(city)` request.
- It only works cities on the Brazilian coast; this info must be known by the user.

## About language
* As the API cames from a brazilian governamental service, the default language of response is the brazilian portuguese. However, the code language is english, as the most known libraries.
* The [INPE's API](http://servicos.cptec.inpe.br/XML/) documentation also is in brazilian portuguese.

### Donations
* Feel confortable to make some donations to maintain and improve the project development. Any donations are very welcome!

- **Bitcoin**: bc1qvulnqxftrscmtn073wwx66szlen30tarnuhqlc
- **Ethereum**: 0xB98D8452002Ef3a6Ca949daAE5846535B174EBcA

### Bugs and Feature Requests
- Found a bug? Please, report it in a issue or submit a Pull Request.