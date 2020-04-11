import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/initialize';



export default class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: props.expenses ? props.expenses.description : '',
            messageNote: props.expenses ? props.expenses.messageNote : '',
            amount: props.expenses ? (props.expenses.amount / 100).toString() : '',
            createdAt: props.expenses ? moment(props.expenses.createdAt) :  moment(),
            calendarFocused: false,
            error: ''
        };
    }
    descriptionChange = (elt) => {
        const description = elt.target.value; 
        this.setState(() => ({description}));
    };
    messageNoteChange = (elt) => {
        const messageNote = elt.target.value;
        this.setState(() => ({messageNote}));
    };
    amountChange =(elt) => {
        const amount = elt.target.value;
        if(!amount || amount.match(/^\d{1, }(\.\d{0, 2})?$/)) {
            this.setState(() => ({amount}));
        }
    };
    onDateChange = (createdAt) => {
        if(createdAt) {
            this.setState(() => ({createdAt}));        }
    };
    onFocusChange = ({focused}) => {
        this.setState(()=>({calendarFocused: focused}));
    };
    onSubmit = (elt) => {
        elt.preventDefault();

        if(!this.state.description || !this.state.amount) {
            this.setState(()=>({error: 'please provide a description and amount'}));
        }else {
            this.setState(()=>({error: ''}));
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) *100,
                createdAt: this.state.createdAt.valueOf(),
                messageNote: this.state.messageNote
            })
        }
    };
    render() {
        
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit} >
                    <input 
                    type="text"
                    placeholder="description"
                    autoFocus
                    value={this.state.description}
                    onChange={this.descriptionChange}
                    />
                    <input 
                    type="text"
                    placeholder="amount"
                    value={this.state.amount}
                    onChange={this.amountChange}
                    />
                    <SingleDatePicker 
                    date={this.state.createdAt}
                    onDateChange={this.onDateChange}
                    focused={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={()=>false}
                    />
                    <textarea
                    placeholder="why do you want to make this expense"
                    value={this.state.messageNote}
                    onChange={this.messageNoteChange}
                    >

                    </textarea>
                    <button
                    
                    >Add Expense
                    </button>
                </form>
            </div>
        )
    }
}