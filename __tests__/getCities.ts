import {describe, expect } from '@jest/globals';
import { getCities } from '../src';

describe('List cities', () => {
    it('Should get a list of cities', async () => {
        const cities = await getCities();
        expect(cities.length).toBeGreaterThan(0);
    });

    it('Should get a list that matches "são paulo"', async () => {
        const cities = await getCities();
        expect(cities.length).toBeGreaterThan(0);
        expect(cities.every(city => city.nome.match(/sao paulo/ig)))
    });
})