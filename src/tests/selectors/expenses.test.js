import selectExpenses from '../../selectors/expenses';
import moment from 'moment';
import expenses from '../fixture/expenses';


test('should filter by text value', () => {
    const filters = {
        text: 't',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[0], expenses[2]])
});

test('should filter by the start date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined
    };
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[0], expenses[1]])
});

test('should filter by the end date', () => {
    const filters={
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0).add(2, 'days')
    };
    const result =  selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[1], expenses[2]])
});

test('should sort by date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[0], expenses[1], expenses[2]])
});

test('should sort by the amount', () => {
    const filters = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    };
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[0], expenses[1], expenses[2]])
});