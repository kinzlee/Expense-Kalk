import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { addExpenses } from '../actions/expenses';

export class AddExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.addExpense(expense);
        this.props.history.push('/');
    };
    render() {
        return  (
            <div>
                <h1> Add Expense</h1>
                <ExpenseForm 
                onSubmit={this.onSubmit}
                />
            </div>
        );
    }
}

// const AddExpensePage = (props) => (
//     <div>
//         <h1> Add Expense</h1>
//         <ExpenseForm 
//         addExpense={
//             (expense) => {
//             // props.dispatch(addExpenses(expense));
//             props.addExpense(expense);
//             props.history.push('/');    
//             }
//         }
//         />
//     </div>
// );

const mapDispatchToProps = () => {
    return {
        addExpense: (expense) => dispatch(addExpenses(expense))
    }
};

export default connect(undefined, mapDispatchToProps)(AddExpensePage);