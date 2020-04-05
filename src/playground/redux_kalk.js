import { createStore, combineReducers} from 'redux';
import uuid from 'uuid';


// ACTION GENERATOR for expense  reducer

const addExpenses = ({
    description = '',
    messageNote = '',
    amount = '',
    createdAt = ''
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

const removeExpense = ({id} = {}) => {
    return {
        type : 'REMOVE_EXPENSE',
        id
    }
};



const editExpense = (id, update) => {
    return {
        type : 'EDIT_EXPENSE',
        id,
        update
    }
};

//ACTION GENERATOR for filter reducer

const setFilterText = (text = '') => {
    return {
        type: 'SET_FILTER_TEXT',
        text
    }
};

const sortByAmount = () => {
    return {
        type: 'SORT_BY_AMOUNT'
    }
};

const sortByDate = () => {
    return {
        type: 'SORT_BY_DATE'
    }
};

const setStartDate = (startDate = undefined) => {
    return  {
        type: 'SET_START_DATE',
        startDate
    }
};

const setEndDate = (endDate = undefined) => {
    return {
        type: 'SET_END_DATE',
        endDate
    }
}

// add expense
// remove expense
// edit expense
// set filter text
// sortby amount
// sortby date
// set startDate
// set endDate  


//reducers

// Expenses Reducer
const defaultExpenseState = [];

const expenseReducer = (state=defaultExpenseState, action) => {
    switch(action.type) {
        
        case  'ADD_EXPENSES':
            return [
            ...state,
            action.expenses
            ];

        case 'REMOVE_EXPENSE' : 
            return state.filter( ({id}) => id !== action.id);
            
        case 'EDIT_EXPENSE' :
            return state.map((expense) => {
                if(expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.update
                    }
                }
                    return expense
            });

        default : 
        return state

           
    }
};


//  Filter Reducer
const defaultFilterState = {
    text : '',
    sortBy : 'date',
    startDate : undefined,
    endDate : undefined
}

const filterReducer = (state=defaultFilterState, action) => {
    switch(action.type) {

        case 'SET_FILTER_TEXT':
            return {
                ...state,
                text: action.text
            }  ;

        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            };

        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            };

        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            };

        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            };

        default : 
        return state
    }
};

//Get visisble expenses
const  getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const  endDateMatch = typeof endDate !=='number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
            if(sortBy === 'date') {
               return a.createdAt < b.createdAt ? 1 : -1;
            } else if(sortBy === 'amount') {
               return a.amount < b.amount ? 1 : -1;
            }
    });
}

// create store object
const store = createStore(combineReducers({
    expenses : expenseReducer,
    filter : filterReducer
}));

store.subscribe(() => {
    const state = store.getState();
    const visilbleExpenses = getVisibleExpenses(state.expenses, state.filter);
    console.log(visilbleExpenses);
})

const expOne = store.dispatch(addExpenses({description: 'Rent', messageNote: 'benz lease', amount: 40000, createdAt: -21000}));
const expTwo = store.dispatch(addExpenses({description: 'Laptop', messageNote: 'dell g-5', amount: 445000, createdAt: -1000}));

// store.dispatch(removeExpense({ id: expOne.expenses.id}));

// store.dispatch(editExpense(expTwo.expenses.id, {amount: 750000}));

// store.dispatch(setFilterText('top'));

// store.dispatch(setFilterText());

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());


// store.dispatch(setStartDate(0));
// // store.dispatch(setStartDate());
// store.dispatch(setEndDate(999));


const testState = {
    expenses: [{
        id: '2242edeeaarfgh',
        description: 'New car lease',
        messageNote: 'your lease payment for your benz on febuary',
        amount: 8440205,
        createdAt: 0
    }],
        filter: {
            text: 'lease',
            sortBy: 'amount', //  sortBy eihter amount or date
            startDate: undefined,
            endDate: undefined
        }
};


