import {actions} from './customer-actions';

describe('Actions', () => {
    it('should create an action to fetch customers', async () => {
        const action = actions.fetchCustomers();
        expect(typeof (action)).toEqual('object');
    });
});
