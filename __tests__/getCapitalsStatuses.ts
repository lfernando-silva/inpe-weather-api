import {describe, expect, test} from '@jest/globals';
import getCapitalsStatuses from "../src/actions/getCapitalsStatuses";

const NUMBER_OF_CAPITALS = 26;

describe('Brazil Capitals statuses', () => {
    it('Should get a list of forecast statuses from Brazil capitals', async () => {
        const statuses = await getCapitalsStatuses();
        expect(statuses.length).toEqual(NUMBER_OF_CAPITALS);
    });
})