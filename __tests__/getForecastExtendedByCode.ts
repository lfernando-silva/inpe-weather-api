import {describe, expect } from '@jest/globals';
import getForecastExtendedByCode from "../src/actions/getForecastExtendedByCode";

const cityCode = '244';
const cityName = 'São Paulo';

describe('Forecast: next four days', () => {
    it('Should get forecast after next seven days from a city by code', async () => {
        const status = await getForecastExtendedByCode(cityCode);
        expect(status.nome).toEqual(cityName);
        expect(status.previsao.length).toBeGreaterThan(4);
    });
})