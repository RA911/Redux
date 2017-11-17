import React from 'react';

const Counter = ({ value, onIncrement, onDecrement }) => {
    return (
        <div>
            <span>{value}</span>
            <button onClick={onIncrement}>Increment</button>
            <button onClick={onDecrement}>Decrmeent</button>
        </div>
    );
}

export default Counter;