import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setFilterText, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters';

class ExpenseListFilter extends React.Component {
    state = {
        calendarFocused: null
    };
    onDatesChange = ({ startDate, endDate }) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    };
    onFocusChange = (calendarFocused) => {
        this.setState( () => ({ calendarFocused }));
    }
    render() {
        return (
            <div>                                                                                                                                                                           
                <input type="text" value={this.props.filter.text} onChange={(elt) => {
                   this.props.dispatch(setFilterText(elt.target.value));
                }} />
                <select 
                value={this.props.filter.sortBy}
                  onChange={(elt) => {
                    if(elt.target.value === "date"){
                        this.props.dispatch(sortByDate(elt.target.value))
                    }else if(elt.target.value === "amount") {
                        this.props.dispatch(sortByAmount(elt.target.value))
                    }
                }}
                >
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

const mapStateToFilter = (state) => {
    return {
        filter: state.filter
    }
}

export default connect(mapStateToFilter)(ExpenseListFilter);