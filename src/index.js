import createStore from './redux/createStore.js';

const counter = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state += 1;
        case 'DECREMENT':
            return state -= 1;
        default:
            return state;
    }
};

const render = () => {
    document.getElementById('counter_value').innerHTML = store.getState();
};

const store = createStore(counter);

render();

store.subscribe(() => {
    render();
});

document.getElementById('btn_increment_counter').addEventListener('click', () => {
    store.dispatch({ type: 'INCREMENT' });
});

document.getElementById('btn_decrement_counter').addEventListener('click', () => {
    store.dispatch({ type: 'DECREMENT' });
});