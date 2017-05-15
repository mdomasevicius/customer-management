import axios from 'axios';

export const types = {
    FETCH_SINGLE_CUSTOMER: 'FETCH_SINGLE_CUSTOMER',
};

const fetchSingleCustomer = (id) => ({
    type: types.FETCH_SINGLE_CUSTOMER,
    payload: {
        promise: axios.get(`/api/customers/${id}`)
    }
});

export const actions = {
    fetchSingleCustomer: fetchSingleCustomer
};
