import {types} from './customer-detail-actions';
const defaultState = {
    fetchingSingleCustomer: false,
    customer: {}
};

export default function reduce(state = defaultState, action) {
    switch (action.type) {
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

        default:
            return state;
    }
}
