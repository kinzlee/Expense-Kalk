import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilter } from '../../components/ExpenseListFilter';
import { filter, altFilter} from '../fixture/filters';
import { DateRangePicker } from 'react-dates';
import moment from 'moment';

let setFilterText, sortByAmount, sortByDate, setStartDate, setEndDate, wrapper;

beforeEach(() => {
    setFilterText = jest.fn();
    sortByAmount = jest.fn();
    sortByDate = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn(); 
    wrapper = shallow(
        <ExpenseListFilter 
        filter={filter}
        setFilterText = {setFilterText} 
        sortByAmount = {sortByAmount} 
        sortByDate = {sortByDate}
        setStartDate = {setStartDate}
        setEndDate = {setEndDate}
        />);
});

test('should render the ExpenseFIlter correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseListFilter with data correctly', () => {
    wrapper.setProps({
        filter: altFilter
    });
    expect(wrapper).toMatchSnapshot();
});  

test('should handle text change', () => {
    const value = 'top';
    wrapper.find('input').simulate('change', {
        target: {value}
    });
    expect(setFilterText).toHaveBeenLastCalledWith(value);
});

test('should sort by date', () => {
    const value = 'date';
    wrapper.setProps({
        filter: altFilter
    }); 
    wrapper.find('select').simulate('change', {
        target: {value}
    });
    expect(sortByDate).toHaveBeenCalled(); 
});

test('should sort by amount', () => {
    const value = 'amount';
    wrapper.find('select').simulate('change', {
        target: {value}
    });
    expect(sortByAmount).toHaveBeenCalled();
});

test('should handle date changes', () => {
    const startDate = moment(0).add(5, "days");
    const endDate = moment(0).add(10, "day");
    wrapper.find(DateRangePicker).prop('onDatesChange')({startDate, endDate});
    expect(setStartDate).toHaveBeenCalledWith(startDate);
    expect(setEndDate).toHaveBeenCalledWith(endDate);
});

test('should handle date focus changes', () => {
    const focusChange = 'startDate';
    wrapper.find(DateRangePicker).prop('onFocusChange')(focusChange);
    expect(wrapper.state('calendarFocused')).toBe(focusChange);
});
 
