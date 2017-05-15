import {types} from './customer-registration-actions';
const defaultState = {
    registeringCustomer: false,
    registeringSuccess: false
};

export default function reduce(state = defaultState, action) {
    switch (action.type) {
        case types.REGISTER_CUSTOMER + '_PENDING':
            return {...state,
                registeringCustomer: true,
                registeringSuccess: false
            };
        case types.REGISTER_CUSTOMER + '_FULFILLED':
            return {
                ...state,
                registeringCustomer: false,
                registeringSuccess: true
            };
        case types.REGISTER_CUSTOMER + '_REJECTED':
            return {...state,
                registeringCustomer: false,
                registeringSuccess: false
            };

        default:
            return state;
    }
}
