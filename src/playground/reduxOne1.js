import { createStore } from 'redux';

const setCount = ({count}) => {
    return {
       type: 'SET',
       count
    }
}

const resetCount = () => {
    return {
        type : 'RESET'
    }
}

const incrementCount = ({incrementBy = 1} = {}) => {
    return {
        type : 'INCREMENT',
        incrementBy
    }
}

const decrementCount = ({decrementBy = 1} = {}) => {
    return {
        type : 'DECREMENT',
        decrementBy 
    }
}

const firstReducer = (state = {count: 0}, action) => {
    switch(action.type) {
        case 'INCREMENT':
            const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1
            return {
                count : state.count + incrementBy
            };
        case 'RESET': 
            return {
                count : 0
            };
        case 'SET' : 
            return {
                count : action.count
            }
        case 'DECREMENT':
            const decrementBy = typeof action.decrementBy === 'number'  ? action.decrementBy : 1
            return {
                count : state.count - decrementBy
            };
        default : 
        return state;
    }

};

const store = createStore(firstReducer);
 
store.subscribe(() => {
console.log(store.getState());
})

store.dispatch(incrementCount({ incrementBy : 8}));

store.dispatch(incrementCount());


store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount({ decrementBy: 8}));

store.dispatch(decrementCount());


store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(setCount({count : 220}));
