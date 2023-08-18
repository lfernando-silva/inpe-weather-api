import {describe, expect } from '@jest/globals';
import { getAirportStatus } from '../src';

describe('Airport Status', () => {
    it('Should get an airport forecast status by its code', async () => {
        const status = await getAirportStatus('SBAA');
        expect(status.codigo).toEqual('SBAA');
    });
})