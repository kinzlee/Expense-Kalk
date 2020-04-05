import React from 'react';
import {shallow} from 'enzyme';
import ExpensesListItem from '../../components/ExpenseListItem';
import expenses from '../fixture/expenses';


test('should render ExpenseList with expenses', () => {
    const wrapper = shallow(<ExpensesListItem expenses={expenses[1]}/>);
    expect(wrapper).toMatchSnapshot(); 
});