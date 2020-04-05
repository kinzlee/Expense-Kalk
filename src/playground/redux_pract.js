import { createStore} from  'redux';

//Action generator : this is a function that return action object

const incrementCount = ( {incrementBy = 1}={}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ( {decrementBy = 1}={}) => ({
type: 'DECREMENT',
decrementBy
});

const resetCount = () => ({
    type:'RESET'
});

const setCount = ( {setBy}) => ({
type: 'SET',
setBy
});

const countReducer = (state = {count:0}, action) => {
    switch (action.type) {
        case 'INCREMENT':
        return {count:state.count + action. incrementBy};

        case 'DECREMENT':
        return {count:state.count-action.decrementBy};

        case 'SET':
        return {count: action.setBy}

        case 'RESET':
        return {count:state.count=0};
        default:
        return state;
    };

};

const store = createStore(countReducer);

    store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch(incrementCount({ incrementBy: 7}));

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 4}));

store.dispatch(setCount({ setBy: 205}));