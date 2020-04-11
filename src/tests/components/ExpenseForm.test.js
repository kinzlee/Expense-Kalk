import React from 'react';
import {shallow} from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixture/expenses';

test('should render expense form appropriately', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
});

test('should render expense form appropriately for an expense', () => {
    const wrapper = shallow(<ExpenseForm expenses={expenses[0]}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should render error for invalid submission', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    });
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
});

test('should set description on input change', () => {
    const value = 'New Description';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(0).simulate('change', { 
        target: { value }
    });
    expect(wrapper.state('description')).toBe(value);
});

test('should set messageNote on textarea change', () => {
    const value = 'New MessageNote value';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('textarea').simulate('change', {
        target: { value }
    });
    expect(wrapper.state('messageNote')).toBe(value);
});

// test('should set amount if valid input', () => {
//     const value = 25.50;
//     const wrapper = shallow(<ExpenseForm />);
//     wrapper.find('input').at(1).simulate('change', {
//         target: { value }
//     });
//     expect(wrapper.state('amount')).toBe(value);
// });

// test('should  not set amount if invalid input', () => {
//     const value = 29.350;
//     const wrapper = shallow(<ExpenseForm />);
//     wrapper.find('input').at(1).simulate('change', {
//         target: { value }
//     });
//     expect(wrapper.state('amount')).toBe('');
// });


test('should call onSubmit prop for valid form submission', () =>{
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<ExpenseForm expenses={expenses[0]} onSubmit={onSubmitSpy} />);
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    });
    expect(wrapper.state('error')).toBe('');
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: expenses[0].description,
        amount: expenses[0].amount,
        messageNote: expenses[0].messageNote,
        createdAt: expenses[0].createdAt
    });  
});



