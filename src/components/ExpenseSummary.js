import React from 'react';
import numeral from 'numeral';
import { connect } from 'react-redux';
import selectorExpense from '../selectors/expenses';
import selectorExpenseTotal from '../selectors/expenseTotal';


export const ExpenseSummary = ({expenseCount, expenseTotal}) => {
    const numberOfExpense = expenseCount===1 ? 'Expense' : 'Expenses';
    const formatedExpenseTotal = numeral(expenseTotal).format('#0,0.00');
    <div>
        <h1>Viewing {expenseCount} {numberOfExpense} that sums up to a total of {formatedExpenseTotal}</h1>
    </div>
};

const mapStateToProps = (state) => {
    visibleExpense = selectorExpense(state.expenses, state.filter);
    return {
            expenseCount: visibleExpense.length,
            expenseTotal: selectorExpenseTotal(visibleExpense)
    };
};

export default connect(mapStateToProps)(ExpenseSummary);