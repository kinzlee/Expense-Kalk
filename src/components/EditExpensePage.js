import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';        
import { removeExpense, editExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component {
    onSubmit = (expenses) => {
        this.props.editExpense(this.props.expenses.id, expenses);
        this.props.history.push('/'); 
    };
    onClick =() => {
        this.props.removeExpense({id: this.props.expenses.id}) 
        this.props.history.push('/');    
        }
    render() {
        return (
            <div>
                <ExpenseForm 
                expenses={this.props.expenses}
                onSubmit={this.onSubmit}
                /> 
                <button
                onClick={this.onClick}
                > remove
                </button>
            </div>
            )
    }
}

// const EditExpensePage = (props) => {
//     console.log(props);
//     return (
//     <div>
//         <ExpenseForm 
//         expenses={props.expenses}
//         onSubmit={(expenses) => {
//         props.dispatch(editExpense(props.expenses.id, expenses));
//         props.history.push('/');    
//       }}
//         /> 
//         <button
//         onClick={() => {
//         props.dispatch(removeExpense({id: props.expenses.id})) 
//         props.history.push('/');    
//         }}
//         > remove
//         </button>
//     </div>
//     )
// };


const mapDispatchToProps = (dispatch, props) => {
    return {
        editExpense: (id, expense) =>  dispatch(editExpense(id, expense)),
        removeExpense: (data) => dispatch(removeExpense(data)) 
    }
};


const mapStateToProps = (state, props) => {
    return {
        expenses: state.expenses.find((expenses) => expenses.id === props.match.params.id)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
