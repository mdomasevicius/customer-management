import axios from 'axios';

export const types = {
    FETCH_CUSTOMERS: 'FETCH_CUSTOMERS',
    REGISTER_CUSTOMER: 'REGISTER_CUSTOMER',
    FETCH_SINGLE_CUSTOMER: 'FETCH_SINGLE_CUSTOMER',
    TOGGLE_CUSTOMER_DETAIL_MODAL: 'TOGGLE_CUSTOMER_DETAIL_MODAL'
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
    types: types.REGISTER_CUSTOMER,
    payload: {
        promise: axios.post('https://api.stripe.com/v1/customers')
    }
});


export const actions = {
    fetchCustomers: fetchCustomers,
    fetchSingleCustomer: fetchSingleCustomer
};
