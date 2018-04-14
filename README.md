# INPE Weather API

# v.1.0.2

A unofficial NodeJS interface to brazillian [INPE's](http://servicos.cptec.inpe.br/XML/) Weather Forecast Webservice.

This service informs the climatic conditions in any city of Brazil.

## Pre-requirements:

* [Node.js](https://nodejs.org/) - 6.x or higher

## Getting started
* As the API cames from a brazilian governamental service, the default language of response is the brazilian portuguese. However, the code language is english, as the most known libraries.
* The INPE's API documentation also is in brazilian portuguese.

## Install

```sh
$ npm install --save inpe-weather-api
```

## Usage
* Import the module to the code

```js
//commonJS require
const InpeForecast = require('inpe-weather-api')

//ES2015 style
import * as InpeForecast from 'inpe-weather-api'

```
* Use the module API promised-based methods.

### API

getCities(cityOrPrefix*)

* Params: (STRING) The city code, name or prefix.
* Returns: JSON array.
* Obtain a list of cities based on the parameter.
* If the the param is empty, the API returns some default cities (no criteria).
* If the prefix is specified, then the API returns all cities that starts with the prefix. Note this is not a REGEX search.
* Otherwise, returns the city based on its code or its name (in portuguese).

getAirportStatus(airportCode*)
* Params: (STRING) The [airport code ("sigla")](http://servicos.cptec.inpe.br/XML/#estacoes-metar) REQUIRED
* Returns: JSON Object

```javascript
{
  "codigo": "SBBQ",
  "atualizacao": "26/01/2018 14:00:00",
  "pressao": "1018",
  "temperatura": "21",
  "tempo": "c",
  "tempo_desc": "Chuvas periódicas",
  "umidade": "83",
  "vento_dir": "130",
  "vento_int": "9",
  "visibilidade": "6000"
}
```

getCapitalsForecast()
* Params: None
* Returns: JSON array of airportStatus, but only for capitals.

getForecast(cityCode*,nextSevenDays,isLatLongPrev, isExtended)
* Params: (STRING) The city code or slash separated lat,long, (BOOLEAN) true to next seven days, default false,
(BOOLEAN) true if use lat/long instead city code, (BOOLEAN) true if is a extended forecast.
* Returns: JSON Object containing an array 'previsao' with the seven or four forecasts.
* Lat/Long only works to a seven days forecast.
* Extended query with lat/long is documented, but throws error as the web service response.

```javascript
//City code
return getForecast('244',true)
    .then(response => /*...*/)

//With lat,long
return getForecast('-22.90/-47.06',true,true)
    .then(response => /*...*/)
```

```json
{
  "nome": "São Paulo",
  "uf": "SP",
  "atualizacao": "2018-04-14",
  "previsao": [
    {
      "dia": "2018-04-14",
      "tempo": "pt",
      "maxima": "26",
      "minima": "18",
      "iuv": "9.0"
    },
    {
      "dia": "2018-04-15",
      "tempo": "ci",
      "maxima": "21",
      "minima": "17",
      "iuv": "9.0"
    },
    {
      "dia": "2018-04-16",
      "tempo": "ci",
      "maxima": "22",
      "minima": "17",
      "iuv": "10.0"
    },
    {
      "dia": "2018-04-17",
      "tempo": "n",
      "maxima": "24",
      "minima": "16",
      "iuv": "10.0"
    },
    {
      "dia": "2018-04-18",
      "tempo": "pn",
      "maxima": "25",
      "minima": "15",
      "iuv": "9.0"
    },
    {
      "dia": "2018-04-19",
      "tempo": "pn",
      "maxima": "26",
      "minima": "16",
      "iuv": "9.0"
    },
    {
      "dia": "2018-04-20",
      "tempo": "vn",
      "maxima": "26",
      "minima": "16",
      "iuv": "9.0"
    }
  ]
}

```

getUVIncidence(cityCode*)
* Params: (STRING) The city code
* Returns a object containing the ultraviolet waves incidence to a city code.

```json
{
  "nome": "São Paulo",
  "uf": "SP",
  "data": "14/04/2018",
  "hora": "12h45",
  "iuv": "4"
}
```

getWavesForecast(cityCode*, day)
* Params: (STRING) The city code, (STRING) The day code
* Day code: 0 = today, 1 = tomorrow, 2 = after tomorrow

## About language
* As the API cames from a brazilian governamental service, the default language of response is the brazilian portuguese. However, the code language is english, as the most known libraries.
* The INPE's API documentation also is in brazilian portuguese.