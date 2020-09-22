import React from 'react';
import Task from './Task';
import store from '../store';
import {deleteTask} from '../actions/taskActions';
import ResetTasks from './ResetTasks';

class TodoList extends React.Component {
  componentDidMount() {
    this.unsubscribe = store.subscribe(()=> {
      this.forceUpdate();
    })
  }

  componentWillUnmount() {
    if(this.unsubscribe) this.unsubscribe();
  }

  deleteTask = (id) => {
    store.dispatch(deleteTask(id));
  }

  render() {
    const tasks = Object.values(store.getState());
    if(!tasks) return null;

    return (
      <ul>
        <ResetTasks />
        {tasks.map((task) => <Task key={task.id} task={task} deleteTask={this.deleteTask}/>)}
      </ul>
    );
  }
} 

export default TodoList;
