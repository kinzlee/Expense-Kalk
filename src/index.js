import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './Routers/AppRouter';
import configureStore from './store/storeConfiguration';
import {addExpenses} from './actions/expenses';
import {setFilterText} from './actions/filters';
import visibleSelector from './selectors/expenses';
import 'react-dates/lib/css/_datepicker.css';
import './styles/style.scss';
import 'normalize.css/normalize.css';

const store = configureStore();
console.log('test');
    const jsx = (
        <Provider store={store}>
        <AppRouter/>
        </Provider>
    );

ReactDOM.render(jsx, document.getElementById('app'));