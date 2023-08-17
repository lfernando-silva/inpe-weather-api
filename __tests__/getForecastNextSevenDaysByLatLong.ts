import {describe, expect } from '@jest/globals';
import getForecastNextSevenDaysByLatLong from "../src/actions/getForecastNextSevenDaysByLatLong";

const cityCoords = {
    lat: '-22.90',
    long: '-47.06'
};
const cityName = 'Campinas';

describe('Forecast: next four days', () => {
    it('Should get a next 4 days forecast from a city', async () => {
        const status = await getForecastNextSevenDaysByLatLong(cityCoords.lat, cityCoords.long);
        expect(status.nome).toEqual(cityName);
        expect(status.previsao.length).toBeGreaterThan(4);
    });
})