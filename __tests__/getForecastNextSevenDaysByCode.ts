import {describe, expect } from '@jest/globals';
import getForecastNextSevenDaysByCode from "../src/actions/getForecastNextSevenDaysByCode";

const cityCode = '244';
const cityName = 'São Paulo';

describe('Forecast: next seven days', () => {
    it('Should get a next 7 days forecast from a city by code', async () => {
        const status = await getForecastNextSevenDaysByCode(cityCode);
        expect(status.nome).toEqual(cityName);
        expect(status.previsao.length).toBeGreaterThan(4);
    });
})