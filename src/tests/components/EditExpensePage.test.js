import React from 'react';
import {shallow} from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixture/expenses';

let editExpense, removeExpense, history, wrapper;

beforeEach(() =>{
    editExpense = jest.fn();
    removeExpense = jest.fn();
    history = {push: jest.fn()};
    wrapper = shallow(
    <EditExpensePage 
    editExpense={editExpense} 
    removeExpense={removeExpense} 
    history={history}
    expenses={expenses[1]}
    />);
    // wrapper = shallow(<EditExpensePage editExpense={editExpense} removeExpense={re   moveExpense} history={history}/>)
});

test('should render edit expense page', () => {
expect(wrapper).toMatchSnapshot();  
});

test('should handle edit expense', () => {
wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
expect(history.push).toHaveBeenCalledWith('/');
expect(editExpense).toHaveBeenCalledWith(expenses[1].id, expenses[1]);   
});

test('should handle remove expense', () => {
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenCalledWith('/');
    expect(removeExpense).toHaveBeenCalledWith({ id: expenses[1].id});   
});