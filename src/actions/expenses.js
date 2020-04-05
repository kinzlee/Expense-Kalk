import uuid from 'uuid';

// ACTION GENERATOR for expense  reducer

export const addExpenses = ({
    description = '',
    messageNote = '',
    amount = 0,
    createdAt = 0
} = {}) => {
    return {
        type : 'ADD_EXPENSES',
        expenses : {
            id: uuid(),
            description,
            messageNote,
            amount,
            createdAt
        }
    }
};

export const removeExpense = ({id} = {}) => {
    return {
        type : 'REMOVE_EXPENSE',
        id
    }
};



export const editExpense = (id, update) => {
    return {
        type : 'EDIT_EXPENSE',
        id,
        update
    }
};