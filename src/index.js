import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';

import configureStore from './configure-store';

import {DatePicker} from 'antd';

import enUS from 'antd/lib/locale-provider/en_US';
import {LocaleProvider} from 'antd';

import 'antd/dist/antd.less';

const store = configureStore();

render(
    <LocaleProvider locale={enUS}>
        <Provider store={store}>
            <DatePicker></DatePicker>
        </Provider>
    </LocaleProvider>
    , document.getElementById('app')
);
