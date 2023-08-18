import {describe, expect } from '@jest/globals';
import { getForecastNextFourDays } from '../src';

const cityCode = '244';
const cityName = 'São Paulo';

describe('Forecast: next four days', () => {
    it('Should get a next 4 days forecast from a city', async () => {
        const status = await getForecastNextFourDays(cityCode);
        expect(status.nome).toEqual(cityName);
        expect(status.previsao.length).toEqual(4);
    });
})