import axios from 'axios';

export const types = {
    FETCH_CUSTOMERS: 'FETCH_CUSTOMERS',
    REGISTER_CUSTOMER: 'REGISTER_CUSTOMER'
};

const fetchCustomers = () => ({
    type: types.FETCH_CUSTOMERS,
    payload: {
        promise: axios.get('/api/customers')
    }
});

const registerCustomer = (customer) => ({
    types: types.REGISTER_CUSTOMER,
    payload: {
        promise: axios.post('https://api.stripe.com/v1/customers')
    }
});

export const actions = {
    fetchCustomers: fetchCustomers
};
