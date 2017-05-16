import {types} from './customer-actions';
import reducer from './customer-reducers';

describe('Reducer::customerReducer', () => {
    const getInitialState = () => {
        return {
            fetchingCustomers: false,
            customers: []
        };
    };

    it('should set initial state by default', () => {
        const action = {type: 'unknown'};
        const expected = getInitialState();

        expect(reducer(undefined, action)).toEqual(expected);
    });

    it('should handle FETCH_CUSTOMERS_PENDING', () => {
        const action = {type: types.FETCH_CUSTOMERS + '_PENDING'};
        const expected = Object.assign(getInitialState(), {
            fetchingCustomers: true
        });

        expect(reducer(getInitialState(), action)).toEqual(expected);
    });

    it('should handle FETCH_CUSTOMERS_REJECTED', () => {
        const action = {type: types.FETCH_CUSTOMERS + '_REJECTED'};
        const expected = Object.assign(getInitialState(), {
            fetchingCustomers: false
        });

        expect(reducer(getInitialState(), action)).toEqual(expected);
    });

    it('should handle FETCH_CUSTOMERS_FULFILLED', () => {
        const testCustomerList = [
            {custmer: 'test'},
            {fullName: 'fullName'},
        ];
        const action = {type: types.FETCH_CUSTOMERS + '_FULFILLED', payload: {data: {entries: testCustomerList}}};
        const expected = Object.assign(getInitialState(), {
            customers: testCustomerList,
            fetchingCustomers: false
        });

        expect(reducer(getInitialState(), action)).toEqual(expected);
    });
});
