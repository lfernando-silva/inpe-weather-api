import {describe, expect } from '@jest/globals';
import getForecastExtendedByLatLong from "../src/actions/getForecastExtendedByLatLong";

const cityCoords = {
    lat: '-22.90',
    long: '-47.06'
};
const cityName = 'Campinas';

describe('Forecast: extended', () => {
    it('Should get forecast after next seven days from a city by lat long coords', async () => {
        const status = await getForecastExtendedByLatLong(cityCoords.lat, cityCoords.long);
        expect(status.nome).toEqual(cityName);
        expect(status.previsao.length).toBeGreaterThan(4);
    });
})