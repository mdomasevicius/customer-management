import React from 'react';
import {IndexRoute, Route} from 'react-router';

import App from './app/App';
import CustomerPage from './customer/CustomerPage';
import CustomerDetailPage from './customer/CustomerDetailPage';
import NotFoundPage from './app/NotFoundPage';

export default (
    <Route path="/" component={App}>
        <IndexRoute path="/" component={CustomerPage}/>
        <Route path="/:customerId" components={CustomerDetailPage}/>
        <Route path="*" component={NotFoundPage}/>
    </Route>
);
