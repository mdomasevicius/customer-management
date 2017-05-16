import axios from 'axios';
import {push} from 'react-router-redux';

export const types = {
    VALIDATE_CUSTOMER_ADDRESS: 'VALIDATE_CUSTOMER_ADDRESS',
    REGISTER_CUSTOMER: 'REGISTER_CUSTOMER'
};

const registerCustomer = (customer) => ({
    type: types.REGISTER_CUSTOMER,
    payload: {
        promise: axios.post('/api/customers', customer)
    }
});
const validateCustomerAddress = (customer) => ({
    type: types.VALIDATE_CUSTOMER_ADDRESS,
    payload: {
        promise: axios.post('/api/address-validation', customer)
    }
});
const registerCustomerMaybeNavigateToList = (customer, failCallback) => (dispatch, getState) => {
    return dispatch(validateCustomerAddress(customer))
        .then(
            () => dispatch(registerCustomer(customer)),
            () => failCallback('Invalid address.')
        )
        .then(
            () => {
                const {addressValid} = getState().customerRegisterReducer;

                if (addressValid) {
                    dispatch(push('/'));
                }
            },
            () => failCallback('Unable to register customer.')
        );
};

export const actions = {
    registerCustomerMaybeNavigateToList: registerCustomerMaybeNavigateToList
};
