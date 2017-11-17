import React from 'react';
import ReactDOM from 'react-dom';

import createStore from './createStore.js';
import counterReducer from './reducers//counter.js';
import Counter from './components/counter.js';

const store = createStore(counterReducer);

const render = () => {
    ReactDOM.render(
        <Counter
            value={store.getState()}
            onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
            onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
        />,
        document.getElementById("app")
    );
};

render();