import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTask } from '../js/actions/actions';

const AddTask = ({ addTask }) => {
  const [newTask, setNewTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      addTask(newTask);
      setNewTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)} />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default connect(null, { addTask })(AddTask);