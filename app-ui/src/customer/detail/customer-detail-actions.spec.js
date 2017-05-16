import {actions} from './customer-detail-actions';

describe('Actions', () => {
    it('should create an action to fetch single customers', async () => {
        const action = actions.fetchSingleCustomer('1');
        expect(typeof (action)).toEqual('object');
    });
});
