import {types} from './customer-detail-actions';
import reducer from './customer-detail-reducers';

describe('Reducer::customerDetailReducer', () => {
    const getInitialState = () => {
        return {
            fetchingSingleCustomer: false,
            customer: {}
        }
    };

    it('should set initial state by default', () => {
        const action = { type: 'unknown' };
        const expected = getInitialState();

        expect(reducer(undefined, action)).toEqual(expected);
    });

    it('should handle FETCH_SINGLE_CUSTOMER_PENDING', () => {
        const action = { type: types.FETCH_SINGLE_CUSTOMER + '_PENDING' };
        const expected = Object.assign(getInitialState(), { fetchingSingleCustomer: true });

        expect(reducer(getInitialState(), action)).toEqual(expected);
    });

    it('should handle FETCH_SINGLE_CUSTOMER_REJECTED', () => {
        const action = { type: types.FETCH_SINGLE_CUSTOMER + '_REJECTED' };
        const expected = Object.assign(getInitialState(), { fetchingSingleCustomer: false });

        expect(reducer(getInitialState(), action)).toEqual(expected);
    });

    it('should handle FETCH_SINGLE_CUSTOMER_FULFILLED', () => {
        const testCustomer = {test: 'test'};
        const action = { type: types.FETCH_SINGLE_CUSTOMER + '_FULFILLED', payload: { data: testCustomer } };
        const expected = Object.assign(getInitialState(), {
            fetchingSingleCustomer: false,
            customer: testCustomer
        });

        expect(reducer(getInitialState(), action)).toEqual(expected);
    });
});
