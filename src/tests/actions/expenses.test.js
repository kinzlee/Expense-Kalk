import { addExpenses, removeExpense, editExpense } from '../../actions/expenses';

test('deleting the avialable expenses', () => {
    const action = removeExpense({id: 'remov12'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: 'remov12'
    });
});

test('editing the selected expenses', () => {
    const action = editExpense('test',{messageNote: 'new expense note'});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: 'test',
        update: {messageNote: 'new expense note'}
    });
});

test('setup action object with provided values', () => {
    const expensesInfo = {
        description: 'testExpense',
        messageNote: 'this is a test note',
        amount: 230000,
        createdAt: 120000
    }
    const action = addExpenses(expensesInfo);
    expect(action).toEqual({
        type: 'ADD_EXPENSES',
        expenses: {
           ...expensesInfo,
           id: expect.any(String)
        }
    });
});

test('setup action with default values', () => {
    const action = addExpenses();
    expect(action).toEqual({
        type: 'ADD_EXPENSES',
        expenses: {
            description: '',
            messageNote: '',
            amount: 0,
            createdAt: 0,
            id: expect.any(String)

        }
    })
});