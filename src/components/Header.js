import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Expense Kalk</h1>
        <NavLink to="/" className="is-active" exact={true}>Dashboard</NavLink>
        <NavLink to="/expense" className="is-active">Expense page</NavLink>
        <NavLink to="/edit" className="is-active">edit expense page</NavLink>
        <NavLink to="/help" className="is-active"> help</NavLink>
    </header>
);

export default Header;