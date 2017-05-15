import {types} from './customer-actions';
const defaultState = {
    fetching: false
};

export default function reduce(state = defaultState, action) {
    switch (action) {
        case types.FETCH_CUSTOMERS + '_PENDING':
            return {...state,
                fetching: true
            };
        case types.FETCH_CUSTOMERS + '_FULFILLED':
            return {
                ...state,
                fetching: false
            };
        case types.FETCH_CUSTOMERS + '_REJECTED':
            return {...state,
                fetching: false
            };
        default:
            return state;
    }
}
