import {types} from './customer-registration-actions';
const defaultState = {
    registeringCustomer: false,
    registrationSucceeded: false,
    addressValid: false
};

export default function reduce(state = defaultState, action) {
    switch (action.type) {
        case types.REGISTER_CUSTOMER + '_PENDING':
            return {...state,
                registeringCustomer: true,
                registrationSucceeded: false
            };
        case types.REGISTER_CUSTOMER + '_FULFILLED':
            return {
                ...state,
                registeringCustomer: false,
                registrationSucceeded: true
            };
        case types.REGISTER_CUSTOMER + '_REJECTED':
            return {...state,
                registeringCustomer: false,
                registrationSucceeded: false
            };

        case types.VALIDATE_CUSTOMER_ADDRESS + '_PENDING':
            return {...state,
                addressValid: false
            };
        case types.VALIDATE_CUSTOMER_ADDRESS + '_FULFILLED':
            return {
                ...state,
                addressValid: true
            };
        case types.VALIDATE_CUSTOMER_ADDRESS + '_REJECTED':
            return {...state,
                addressValid: false
            };

        default:
            return state;
    }
}
