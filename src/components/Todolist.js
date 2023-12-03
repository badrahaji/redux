import React from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';

const TaskList = ({ tasks, filter }) => {
  const filteredTasks = filter === 'ALL' ? tasks : tasks.filter((task) => (filter === 'DONE' ? task.done : !task.done));

  return (
    <ul>
      {filteredTasks.map((task) => (
        <Todo key={task.id} task={task} />
      ))}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  tasks: state.tasks,
  filter: state.filter,
});

export default connect(mapStateToProps)(TaskList);