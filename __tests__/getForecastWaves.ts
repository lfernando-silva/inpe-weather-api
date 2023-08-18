import {describe, expect } from '@jest/globals';
import getForecastWaves from "../src/actions/getForecastWaves";

const CODE = '241';
const CITY_NAME = 'Rio de Janeiro';

const NOT_A_COAST_CITY_CODE = '244';
const NOT_A_COAST_CITY_NAME = 'São Paulo';

const getNextDay = (currentDay: string): string => {
    const [day, month, year] = currentDay.split('-').map(e => parseInt(e, 10));
    const date = new Date(year, month - 1, day)
    const nextDate = new Date(date.getTime() + (24 * 60 * 60 * 1000)).toLocaleDateString("pt-BR", { 
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    });
    return nextDate.replace(/\//g, '-');
}

describe('Waves Forecast: Today (0), Tomorrow (1) and After Tomorrow (2)', () => {
    it('Should get TODAY\'S waves forecast status by its code', async () => {
        const status = await getForecastWaves(CODE, '0');
        const regex = new RegExp(status.atualizacao as string);
        expect(status.nome).toEqual(CITY_NAME);
        expect(status.manha.dia).toMatch(regex);
        expect(status.tarde.dia).toMatch(regex);
        expect(status.noite.dia).toMatch(regex);
    });

    it('Should get TODAY\'S waves forecast status by its code (no 2nd param)', async () => {
        const status = await getForecastWaves(CODE);
        const regex = new RegExp(status.atualizacao as string);
        expect(status.nome).toEqual(CITY_NAME);
        expect(status.manha.dia).toMatch(regex);
        expect(status.tarde.dia).toMatch(regex);
        expect(status.noite.dia).toMatch(regex);
    });

    it('Should get TOMORROW\'S waves forecast status by its code', async () => {
        const status = await getForecastWaves(CODE, '1');
        const tomorrowRegex = new RegExp(getNextDay(status.atualizacao as string));
        expect(status.nome).toEqual(CITY_NAME);
        expect(status.manha.dia).toMatch(tomorrowRegex);
        expect(status.tarde.dia).toMatch(tomorrowRegex);
        expect(status.noite.dia).toMatch(tomorrowRegex);
    });

    it('Should get DAY AFTER TOMORROW\'S waves forecast status by its code', async () => {
        const status = await getForecastWaves(CODE, '2');
        const tomorrow = getNextDay(status.atualizacao as string);
        const dayAfterTomorrowRegex = new RegExp(getNextDay(tomorrow));
        expect(status.nome).toEqual(CITY_NAME);
        expect(status.manha.dia).toMatch(dayAfterTomorrowRegex);
        expect(status.tarde.dia).toMatch(dayAfterTomorrowRegex);
        expect(status.noite.dia).toMatch(dayAfterTomorrowRegex);
    });

    it('Should get an empty response for a non coast city', async () => {
        const status = await getForecastWaves(NOT_A_COAST_CITY_CODE);
        expect(status.nome).toEqual('undefined');
    });
})