import React from 'react';
import NotFoundPage from './NotFoundPage';
import {shallow} from 'enzyme';

describe('NotFoundPage spec', () => {
    it('should have `404 Page Not Found` message', () => {
        const wrapper = shallow(<NotFoundPage />);
        const found = wrapper.find('h4').text();

        expect(found).toBe('404 Page Not Found');
    });

    it('should have link to go back', () => {
        const wrapper = shallow(<NotFoundPage />);
        const found = wrapper.findWhere(n => n.prop('to') === '/').length;

        expect(found).toBe(1);
    });
});
