import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('setup the default filters value', () => {
    const state = filtersReducer(undefined, {type:'@@INT'});
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('sorting by amount', () => {
    const state = filtersReducer(undefined, {type:'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount')
});

test('sorting by date', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate:  undefined,
        sortBy: 'amount'
    };
    const action = {type: 'SORT_BY_DATE'};
    const state = filtersReducer(currentState, action);
    expect(state.sortBy).toBe('date');
});

test('setting up the start date', () => {
    const startDate = moment();
    const action = {
        type: 'SET_START_DATE',
        startDate
    }
    const state = filtersReducer(undefined, action);
    expect(state.startDate).toBe(startDate);
});

test('setting up text filter', () => {
    const text = 'some text';
    const action = {
        type: 'SET_FILTER_TEXT',
        text
    }
    const state = filtersReducer(undefined, action)
    expect(state.text).toBe(text);
});

test('setting up the end date', () => {
    const endDate = moment();
    const action = {
        type: 'SET_END_DATE',
        endDate
    };
    const state = filtersReducer(undefined, action);
    expect(state.endDate).toBe(endDate);
});