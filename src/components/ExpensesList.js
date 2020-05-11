import React from 'react';
import { connect } from 'react-redux';
import ExpensesListItem from './ExpenseListItem';
import ExpenseSelector from '../selectors/expenses';

export const ExpensesList = (props) => (
    <div>
        {
            props.expenses.length === 0 ? (
                <p> No expenses</p>
            ) : (
            props.expenses.map((expense) => {
                return <ExpensesListItem key ={expense.id} {...expense}/> 
            })
            )
        }
    </div> 
);
const mapStateToProps = (state) => {
    return {
        expenses: ExpenseSelector(state.expenses, state.filter)
    };
};
export default connect(mapStateToProps)(ExpensesList);
