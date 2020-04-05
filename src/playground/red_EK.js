import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';

//Add Expense list
const addExpense  = ({
    description = '',
    message = '',
    cost = 0,
    createdAt = 0
    } = {}
) => ({
    type:'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        message,
        cost,
        createdAt
    }
});

// REMOVE EXPENSE
const removeExpense = ({ id}={}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

// EDIT EXPENSE
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

//SET TEXT FILTER
const setTextFilter = (text = '`x') => ({
    type: 'TEXT_FILTER',
    text
});

//SORT BY DATE
// SORT BY AMOUNT
// SET START DATE
// SET END DATE



// expenses reducer
const expenseReducerDefaultState = [];
const  expensesReducer = (state = expenseReducerDefaultState, action) => {
    switch(action.type){
        case 'ADD_EXPENSE':
        return [
            ...state,
            action.expense
        ];
        case 'REMOVE_EXPENSE':
        return state.filter(({ id}) => id !== action.id)
        default:
        return state;
        case 'EDIT_EXPENSE':
        return state.map((expense) => {
            if (expense.id === action.id) {
                return {
                    ...expense,
                    ...action.updates
                }
            }else {
               return expense; 
            }
        })
    }
};

// filters reducer
const filtersReducerDefaultState = {
    text: '',
    sort: 'date',
    statDate: undefined,
    endDate: undefined
}
const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch(action.type){
        default:
        return state;
        case 'TEXT_FILTER':
        return {
            ...state,
            text: action.text
        }
    }
}

// get visible expenses
// const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
//  return expenses.filter((expense) => {
//     const startDateMatch = typeof startDate !== 'number' || expense.createdAt >=startDate;
//     const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= startDate;
//     const textMatch;

//     return startDateMatch && endDateMatch && textMatch;
//  })
// };

// creation of store
const store = createStore(
    combineReducers({
        expenses:expensesReducer,
        filters: filtersReducer
    })
);

// store.subscribe(() => {
//     const state = store.getState();
//     const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
//     console.log(visibleExpenses);
// });

store.subscribe(() => {
    console.log(store.getState());
})

const expOne = store.dispatch(addExpense({ description:'rent payment', cost:'20000'}));
const expTwo = store.dispatch(addExpense({ description:'beach party', cost:'8000'}));
store.dispatch(removeExpense({ id: expOne.expense.id}));
store.dispatch(editExpense(expTwo.expense.id, {cost:'5000'}));
store.dispatch(setTextFilter('beach'));
store.dispatch(setTextFilter(''));

const demoState = {
    expenses: [{
        id: 'tunikings',
        description: 'house rent',
        message: 'this was meant to be the final payment for this address this year',
        cost: 110000,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', // sort by either amount or date
        startDate: undefined,
        endDate: undefined
    }
};

