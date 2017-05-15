import axios from 'axios';
import {push} from 'react-router-redux';

export const types = {
    FETCH_CUSTOMERS: 'FETCH_CUSTOMERS',
    REGISTER_CUSTOMER: 'REGISTER_CUSTOMER',
    FETCH_SINGLE_CUSTOMER: 'FETCH_SINGLE_CUSTOMER',
    TOGGLE_CUSTOMER_DETAIL_MODAL: 'TOGGLE_CUSTOMER_DETAIL_MODAL',
};

const fetchCustomers = () => ({
    type: types.FETCH_CUSTOMERS,
    payload: {
        promise: axios.get('/api/customers')
    }
});

const fetchSingleCustomer = (id) => ({
    type: types.FETCH_SINGLE_CUSTOMER,
    payload: {
        promise: axios.get(`/api/customers/${id}`)
    }
});

const registerCustomer = (customer) => ({
    type: types.REGISTER_CUSTOMER,
    payload: {
        promise: axios.post('/api/customers', customer)
    }
});
const registerCustomerMaybeNavigateToList = (customer, failCallback) => (dispatch, getState) => dispatch(registerCustomer(customer))
    .then(() => {
        const {registeringSuccess} = getState().customerReducer;

        if (registeringSuccess) {
            dispatch(push('/'));
        } else {
            failCallback();
        }
    });

export const actions = {
    fetchCustomers: fetchCustomers,
    fetchSingleCustomer: fetchSingleCustomer,
    registerCustomerMaybeNavigateToList: registerCustomerMaybeNavigateToList,
};
