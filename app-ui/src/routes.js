import React from 'react';
import {IndexRoute, Route} from 'react-router';

import App from './app/App';
import CustomerPage from './customer/CustomerPage';
import CustomerDetailPage from './customer/CustomerDetailPage';
import CustomerRegisterPage from './customer/CustomerRegisterPage';
import NotFoundPage from './app/NotFoundPage';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={CustomerPage}/>
        <Route path="/customers/:customerId" components={CustomerDetailPage}/>
        <Route path="/register" components={CustomerRegisterPage}/>
        <Route path="*" component={NotFoundPage}/>
    </Route>
);
