import React from 'react';
import {render} from 'react-dom';

import {DatePicker} from 'antd';

import enUS from 'antd/lib/locale-provider/en_US';
import {LocaleProvider} from 'antd';

import 'antd/dist/antd.less';

render(
    <LocaleProvider locale={enUS}>
        <DatePicker></DatePicker>
    </LocaleProvider>
    , document.getElementById('app')
);
