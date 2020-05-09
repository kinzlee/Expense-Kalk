import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseSummary } from '../../components/ExpenseSummary';

test('should view one epeneses totalling #100', () => {
const wrapper = shallow(<ExpenseSummary expenseCount={1} expenseTotal={100}/>);
expect(wrapper).toMatchSnapshot();
});

test('should view multiple expenses with a tota #4509000', () => {
const wrapper =  shallow(<ExpenseSummary expenseCount ={7} expenseTotal={4509000}/>);
expect(wrapper).toMatchSnapshot();
});