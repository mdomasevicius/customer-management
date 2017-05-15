import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {browserHistory, Router} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import configureStore from './configure-store';
import routes from './routes';

import enUS from 'antd/lib/locale-provider/en_US';
import {LocaleProvider} from 'antd';

import 'antd/dist/antd.less';

const store = configureStore();

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

render(
    <LocaleProvider locale={enUS}>
        <Provider store={store}>
            <Router history={history} routes={routes}/>
        </Provider>
    </LocaleProvider>
    , document.getElementById('app')
);
