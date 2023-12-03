// actionCreators.js
import {ADD_TASK,EDIT_TASK,DELETE_TASK,TOGGLE_TASK,FILTER_TASKS} from '../constant/actionstypes'
export const addTask = (task) => ({ type: ADD_TASK, payload: task });
export const editTask = (taskId, updatedTask) => (
    { type: EDIT_TASK, payload: { taskId, updatedTask } });
export const deleteTask = (taskId) => ({ type: DELETE_TASK, payload: taskId });
export const toggleTask = (taskId) => ({ type: TOGGLE_TASK, payload: taskId });
export const filterTasks = (filterType) => ({ type: FILTER_TASKS, payload: filterType });
