// Expenses Reducer
const defaultExpenseState = [];

export default (state=defaultExpenseState, action) => {
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