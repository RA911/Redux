const createStore = (reducer) => {
    let state,
        subscribers = [];

    const getState = () => state;

    const subscribe = (listener) => {
        subscribers.push(listener);
    };

    const dispatch = (action) => {
        state = reducer(state, action);
        subscribers.forEach(subscriber => subscriber());
    };

    dispatch({
        type: 'INIT'
    });

    return { getState, subscribe, dispatch };
};

export default createStore;