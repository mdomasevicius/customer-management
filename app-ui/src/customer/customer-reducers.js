import {types} from './customer-actions';
const defaultState = {
    fetchingCustomers: false,
    customers: []
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

        default:
            return state;
    }
}
