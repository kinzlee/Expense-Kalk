import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './Routers/AppRouter';
import configureStore from './store/storeConfiguration';
import {addExpenses} from './actions/expenses';
import {setFilterText} from './actions/filters';
import visibleSelector from './selectors/expenses';
import './styles/style.scss';
import 'normalize.css/normalize.css';

const store = configureStore();





store.dispatch(addExpenses({description: 'Water bill', amount:2000}));

store.dispatch(addExpenses({description: 'Gas bill', createdAt:1000}));

store.dispatch(addExpenses({description: 'Lease', amount:3000}));


store.dispatch(setFilterText(''));

// setTimeout(() => {
//     store.dispatch(setFilterText('bill'));
// }, 4000)


    const state = store.getState();
    const visibleExpenses = visibleSelector(state.expenses, state.filter);
    console.log(visibleExpenses);

    const jsx = (
        <Provider store={store}>
        <AppRouter/>
        </Provider>
    );

ReactDOM.render(jsx, document.getElementById('app'));