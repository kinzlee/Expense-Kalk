import React from 'react';
import {shallow} from 'enzyme';
import ExpensesListItem from '../../components/ExpenseDashboardPage';
import ExpenseDashboardPage from '../../components/ExpenseDashboardPage';
// import expenses from '../fixture/expenses';

test('should render Expense Dashboard correctly', () => {
    const wrapper = shallow(<ExpenseDashboardPage/>);
    expect(wrapper).toMatchSnapshot(); 
});