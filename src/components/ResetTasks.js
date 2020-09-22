import React from 'react';
import store from '../store';
import { resetTasks } from '../actions/taskActions';

const clickHandler = () =>{
    store.dispatch(resetTasks());
}
const ResetTasks = () => {
    return (
        <button onClick={clickHandler}>Reset All</button>
    );
};

export default ResetTasks;