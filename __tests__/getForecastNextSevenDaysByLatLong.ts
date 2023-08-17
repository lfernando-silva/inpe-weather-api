import {describe, expect } from '@jest/globals';
import getForecastNextSevenDaysByLatLong from "../src/actions/getForecastNextSevenDaysByLatLong";

const cityCoords = {
    lat: '-22.90',
    long: '-47.06'
};
const cityName = 'Campinas';

describe('Forecast: next seven days', () => {
    it('Should get a next seven days forecast from a city by lat long coords', async () => {
        const status = await getForecastNextSevenDaysByLatLong(cityCoords.lat, cityCoords.long);
        expect(status.nome).toEqual(cityName);
        expect(status.previsao.length).toBeGreaterThan(4);
    });
})