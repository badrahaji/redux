// our reducer 
import {ADD_TASK,EDIT_TASK,DELETE_TASK,TOGGLE_TASK,FILTER_TASKS} from '../constant/actionstypes'

const initialState = {
    tasks: [],
    filter: 'ALL',
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        // adding task with it id and done boolean variable 
      case ADD_TASK:
        return { ...state, tasks: [...state.tasks, { id: Date.now(), text: action.payload, done: false }] };
      case EDIT_TASK:
        return {
          ...state,
          tasks: state.tasks.map((task) =>
            task.id === action.payload.taskId ? { ...task, text: action.payload.updatedTask } : task
          ),
        };
      case DELETE_TASK:
        return { ...state, tasks: state.tasks.filter((task) => task.id !== action.payload) };
      case TOGGLE_TASK:
        return {
          ...state,
          tasks: state.tasks.map((task) =>
            task.id === action.payload ? { ...task, done: !task.done } : task
          ),
        };
      case FILTER_TASKS:
        return { ...state, filter: action.payload };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  