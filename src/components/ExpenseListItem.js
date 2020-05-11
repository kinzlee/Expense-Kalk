import React from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpensesListItem = ( { id, description, amount, createdAt}) => (
    <div>
        <Link to={`/edit/${id}`}>
        <h2> {description} </h2>
        </Link>
        <p> 
        {numeral(amount).format('#0,0.00')}
         - 
        {moment(createdAt).format('Do, MMMM YYYY')} 
        </p>
    </div>
);

export default ExpensesListItem;