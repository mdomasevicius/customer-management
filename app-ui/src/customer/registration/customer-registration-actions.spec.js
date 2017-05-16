import {actions} from './customer-registration-actions';

describe('Actions', () => {
    it('should create an action to register customer', () => {
        const action = actions.registerCustomerMaybeNavigateToList();
        expect(typeof (action)).toEqual('function');
    });
});
