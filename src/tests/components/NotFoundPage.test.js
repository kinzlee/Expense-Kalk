import React from 'react';
import {shallow} from 'enzyme';
import ExpensesListItem from '../../components/NotFoundPage';
import NotFoundPage from '../../components/NotFoundPage';
// import expenses from '../fixture/expenses';

test('should render not found page correctly', () => {
    const wrapper = shallow(<NotFoundPage/>);
    expect(wrapper).toMatchSnapshot();  
});