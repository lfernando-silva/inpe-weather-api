import {describe, expect } from '@jest/globals';
import { getForecastWavesNextSixDaysByCode } from '../src';

const CODE = '241';
const CITY_NAME = 'Rio de Janeiro';

const NOT_A_COAST_CITY_CODE = '244';

describe('Waves Forecast: Next six days', () => {
    it('Should get next six days waves forecast status by its code', async () => {
        const status = await getForecastWavesNextSixDaysByCode(CODE);
        expect(status.nome).toEqual(CITY_NAME);
        expect(status.previsao.length).toBeGreaterThan(4);
    });

    it('Should get an error response for a non coast city', async () => {
        try {
            await getForecastWavesNextSixDaysByCode(NOT_A_COAST_CITY_CODE);
        } catch (err: any){
            expect(err.message).toEqual('Error');
        }
    });
})