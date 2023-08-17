import {describe, expect, test} from '@jest/globals';
import getAirportStatus from "../src/actions/getAirportStatus";

describe('Airport Status', () => {
    it('Should get an airport status by its code', async () => {
        const status = await getAirportStatus('SBAA');
        expect(status.codigo).toEqual('SBAA');
    });
})