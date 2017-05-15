import axios from 'axios';
import {push} from 'react-router-redux';

export const types = {
    REGISTER_CUSTOMER: 'REGISTER_CUSTOMER',
};

const registerCustomer = (customer) => ({
    type: types.REGISTER_CUSTOMER,
    payload: {
        promise: axios.post('/api/customers', customer)
    }
});
const registerCustomerMaybeNavigateToList = (customer, failCallback) => (dispatch, getState) => dispatch(registerCustomer(customer))
    .then(() => {
        const {registeringSuccess} = getState().customerRegisterReducer;

        if (registeringSuccess) {
            dispatch(push('/'));
        } else {
            failCallback();
        }
    });

export const actions = {
    registerCustomerMaybeNavigateToList: registerCustomerMaybeNavigateToList,
};
