import {types} from './customer-actions';
const defaultState = {
    fetchingCustomers: false,
    customers: [],

    fetchingSingleCustomer: false,
    customer: {},

    registeringCustomer: false,
    registeringSuccess: false
};

export default function reduce(state = defaultState, action) {
    switch (action.type) {
        case types.FETCH_CUSTOMERS + '_PENDING':
            return {...state,
                fetchingCustomers: true
            };
        case types.FETCH_CUSTOMERS + '_FULFILLED':
            return {
                ...state,
                customers: action.payload.data.entries,
                fetchingCustomers: false
            };
        case types.FETCH_CUSTOMERS + '_REJECTED':
            return {...state,
                fetchingCustomers: false
            };

        case types.FETCH_SINGLE_CUSTOMER + '_PENDING':
            return {...state,
                fetchingSingleCustomer: true
            };
        case types.FETCH_SINGLE_CUSTOMER + '_FULFILLED':
            return {
                ...state,
                customer: action.payload.data,
                fetchingSingleCustomer: false,
            };
        case types.FETCH_SINGLE_CUSTOMER + '_REJECTED':
            return {...state,
                fetchingSingleCustomer: false
            };

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
