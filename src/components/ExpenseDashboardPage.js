import React from 'react';
import ExpensesList from './ExpensesList';
import ExpenseListFilter from './ExpenseListFilter';
import ExpenseSummary from './ExpenseSummary'; 

const ExpenseDashboardPage = () => (
    <div>
        <ExpenseSummary />

        <ExpenseListFilter/>
        
        <ExpensesList />
    </div>
);

export default ExpenseDashboardPage;