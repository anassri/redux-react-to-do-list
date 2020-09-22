export const CREATE_TASK = 'CREATE_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const RESET_TASK_LIST = 'RESET_TASK_LIST';

export const createTask = (taskMessage) => ({
    type: CREATE_TASK,
    taskId: new Date().getTime(),
    taskMessage
});
export const deleteTask = (taskId) => ({
    type: DELETE_TASK,
    taskId
});

export const resetTasks = () => ({
    type: RESET_TASK_LIST,
});

