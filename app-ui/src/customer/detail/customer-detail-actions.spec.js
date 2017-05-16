import {actions} from './customer-detail-actions';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

describe('Actions', () => {

    it('should', async () => {
        const mockCustomer = {
            fullName: 'Rob Bob',
            email: 'email@em.ai',
            city: 'City',
            street: 'Street',
            zipCode: '22222',
            houseNumber: '2'
        };

        const mockAdapter = new MockAdapter(axios);
        mockAdapter.onGet('/api/customers/1').reply(200, {
            entries: [mockCustomer]
        });

        const action = actions.fetchSingleCustomer('1');
        const response = await action.payload.promise;

        expect(typeof (action.type)).toEqual('string');
        expect(response.data.entries).toEqual([mockCustomer]);
    });

    it('should create an action to fetch single customers', async () => {
        const action = actions.fetchSingleCustomer('1');
        expect(typeof (action)).toEqual('object');
    });
});
