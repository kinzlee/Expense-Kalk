import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';        
import { removeExpense, editExpense } from '../actions/expenses';

const EditExpensePage = (props) => {
    console.log(props);
    return (
    <div>
        <ExpenseForm 
        expenses={props.expenses}
        onSubmit={(expenses) => {
        props.dispatch(editExpense(props.expenses.id, expenses));
        props.history.push('/');    
      }}
        /> 
        <button
        onClick={() => {
        props.dispatch(removeExpense({id: props.expenses.id})) 
        props.history.push('/');    
        }}
        > remove
        </button>
    </div>
    )
};

const mapStateToProps = (state, props) => {
    return {
        expenses: state.expenses.find((expenses) => expenses.id === props.match.params.id)
    }
}

export default connect(mapStateToProps)(EditExpensePage);
