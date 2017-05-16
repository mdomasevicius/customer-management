import {types} from './customer-registration-actions';
import reducer from './customer-registration-reducers';

describe('Reducer::customerRegistrationReducer', () => {
    const getInitialState = () => {
        return {
            registeringCustomer: false,
            registrationSucceeded: false,
            addressValid: false
        };
    };

    it('should set initial state by default', () => {
        const action = { type: 'unknown' };
        const expected = getInitialState();

        expect(reducer(undefined, action)).toEqual(expected);
    });

    it('should handle REGISTER_CUSTOMER_PENDING', () => {
        const action = { type: types.REGISTER_CUSTOMER + '_PENDING' };
        const expected = Object.assign(getInitialState(), {
            registeringCustomer: true,
            registrationSucceeded: false
        });

        expect(reducer(getInitialState(), action)).toEqual(expected);
    });

    it('should handle REGISTER_CUSTOMER_REJECTED', () => {
        const action = { type: types.REGISTER_CUSTOMER + '_REJECTED' };
        const expected = Object.assign(getInitialState(), {
            registeringCustomer: false,
            registrationSucceeded: false
        });

        expect(reducer(getInitialState(), action)).toEqual(expected);
    });

    it('should handle REGISTER_CUSTOMER_FULFILLED', () => {
        const action = { type: types.REGISTER_CUSTOMER + '_FULFILLED' };
        const expected = Object.assign(getInitialState(), {
            registeringCustomer: false,
            registrationSucceeded: true
        });

        expect(reducer(getInitialState(), action)).toEqual(expected);
    });

    it('should handle VALIDATE_CUSTOMER_ADDRESS_PENDING', () => {
        const action = { type: types.VALIDATE_CUSTOMER_ADDRESS + '_PENDING' };
        const expected = Object.assign(getInitialState(), {
            addressValid: false
        });

        expect(reducer(getInitialState(), action)).toEqual(expected);
    });

    it('should handle VALIDATE_CUSTOMER_ADDRESS_REJECTED', () => {
        const action = { type: types.VALIDATE_CUSTOMER_ADDRESS + '_REJECTED' };
        const expected = Object.assign(getInitialState(), {
            addressValid: false
        });

        expect(reducer(getInitialState(), action)).toEqual(expected);
    });

    it('should handle VALIDATE_CUSTOMER_ADDRESS_FULFILLED', () => {
        const action = { type: types.VALIDATE_CUSTOMER_ADDRESS + '_FULFILLED' };
        const expected = Object.assign(getInitialState(), {
            addressValid: true
        });

        expect(reducer(getInitialState(), action)).toEqual(expected);
    });
});
