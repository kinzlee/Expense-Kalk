import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setFilterText, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters';

export class ExpenseListFilter extends React.Component {
    state = {
        calendarFocused: null
    };
    onDatesChange = ({ startDate, endDate }) => {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    };
    onFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }));
    };
    onTextChange = (elt) => {
        this.props.setFilterText(elt.target.value);
     };
     onSortChange = (elt) => {
        if(elt.target.value === "date"){
            this.props.sortByDate(elt.target.value)
        }else if(elt.target.value === "amount") {
            this.props.sortByAmount(elt.target.value)
        } 
    };
    render() {
        return (
            <div>                                                                                                                                                                           
                <input type="text" value={this.props.filter.text} onChange={this.onTextChange} />
                <select value={this.props.filter.sortBy} onChange={this.onSortChange}>
                <option value="date">Date</option>
                <option value="amount">Amount</option>
                </select>
                <DateRangePicker 
                startDate={this.props.filter.startDate}
                startDateId = "{this.props.id}"
                endDate={this.props.filter.endDate}
                endDateId="{this.props.id}"
                onDatesChange={this.onDatesChange}
                focusedInput={this.state.calendarFocused}
                onFocusChange={this.onFocusChange}
                showClearDates={true}
                numberOfMonths={1}
                isOutsideRange={() => false}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
        filter: state.filter
    });
const mapDispatchToProps = (dispatch) => ({
        setFilterText: (text) => dispatch(setFilterText(text)),
        sortByAmount: () => dispatch(sortByAmount()),
        sortByDate: () => dispatch(sortByDate()),
        setStartDate: (startDate) => dispatch(setStartDate(startDate)),
        setEndDate: (endDate) => dispatch(setEndDate(endDate))
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilter);