import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import customerListReducer from './customer/customer-reducers';
import customerDetailReducer from './customer/detail/customer-detail-reducers';
import customerRegisterReducer from './customer/registration/customer-registration-reducers';

const rootReducer = combineReducers({
    customerListReducer,
    customerDetailReducer,
    customerRegisterReducer,
    routing: routerReducer,
});

export default rootReducer;
