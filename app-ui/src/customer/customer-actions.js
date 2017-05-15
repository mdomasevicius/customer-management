import axios from 'axios';

export const types = {
    FETCH_CUSTOMERS: 'FETCH_CUSTOMERS',
};

const fetchCustomers = () => ({
    type: types.FETCH_CUSTOMERS,
    payload: {
        promise: axios.get('/api/customers')
    }
});

export const actions = {
    fetchCustomers: fetchCustomers
};
