import React from 'react';
import { connect } from 'react-redux';
import { editTask, deleteTask, toggleTask } from '../js/actions/actions';

const Todo = ({ task, editTask, deleteTask, toggleTask }) => {
  return (
    <li>
      <span style={{ textDecoration: task.done ? 'line-through' : 'none' }}>{task.text}</span>
      <button onClick={() => toggleTask(task.id)}>{task.done ? 'Undone' : 'Done'}</button>
      <button onClick={() => editTask(task.id, prompt('Edit task:', task.text))}>Edit</button>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </li>
  );
};

export default connect(null, { editTask, deleteTask, toggleTask })(Todo);