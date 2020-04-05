import expensesReducer from '../../reducers/expenses';
import expenses from '../fixture/expenses';
import moment from 'moment';

test('should set the default state', () => {
    const state = expensesReducer(undefined, '@INTT');
    expect(state).toEqual([]);
});

test('should remove expense  by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[2].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[1]]);
});

test('should not remove expenses if id is not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '101'
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

// test('should add expense', () => {
//     const expenseAdd = {
//     id: '301',
//     description: 'top',
//     messageNote: '',
//     amount: 45000,
//     createdAt:20000
//     };
//     const action = {
//         type: 'ADD_EXPENSES',
//         expenseAdd
//     };
//     const state = expensesReducer(expenses, action);
//     expect(state).toEqual([...expenses, expenseAdd])
// })

test('should edit the selected expense', () => {
    const messageNote = 'hey therr';
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        update: {
            messageNote
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state[1].messageNote).toEqual(messageNote);
});

test('should not edit any expense when not available or if not found', () => {
    const messageNote = 'i do not exist';
    const action = {
        type: 'EDIT_EXPENSE',
        id: '305',
        update: {
            messageNote
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});