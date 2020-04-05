import {sortByAmount, sortByDate, setFilterText, setStartDate, setEndDate} from '../../actions/filters';
import moment from 'moment';

test('setup action for the start date', () => {
    const action = setStartDate(moment(0));
        expect(action).toEqual({
            type: 'SET_START_DATE',
            startDate: moment(0)
        });
});
test('setup action for the start date', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    });
});

test('setup action for the sort by amount function', () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    });
});

test('setup action for the sort by date function', () => {
    const action = sortByDate();
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    });
});

test('setup actionf for filtering the text of a given value', () => {
    const text = 'testing'
    const action = setFilterText(text);
    expect(action).toEqual({
        type: 'SET_FILTER_TEXT',
        text
    });
});

test('setup action for thedefault value of the text value', () => {
    const action = setFilterText();
    expect(action).toEqual({
        type:'SET_FILTER_TEXT',
        text: ''
    })
})