# INPE Weather API

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

getCities(cityOrPrefix)

* Params: (STRING) The city code, name or prefix.
* Returns: JSON array.
* Obtain a list of cities based on the parameter.
* If the the param is empty, the API returns some default cities (no criteria).
* If the prefix is specified, then the API returns all cities that starts with the prefix. Note this is not a REGEX search.
* Otherwise, returns the city based on its code or its name (in portuguese).

getAirportStatus(airportCode)
* Params: (STRING) The [airport code ("sigla")](http://servicos.cptec.inpe.br/XML/#estacoes-metar) [REQUIRED]
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

## About language
* As the API cames from a brazilian governamental service, the default language of response is the brazilian portuguese. However, the code language is english, as the most known libraries.
* The INPE's API documentation also is in brazilian portuguese.