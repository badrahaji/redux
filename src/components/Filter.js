import React from 'react';
import { connect } from 'react-redux';
import { filterTasks } from '../js/actions/actions';

const Filter = ({ filterTasks }) => {
  return (
    <div>
      <button onClick={() => filterTasks('ALL')}>All</button>
      <button onClick={() => filterTasks('DONE')}>Done</button>
      <button onClick={() => filterTasks('UNDONE')}>Undone</button>
    </div>
  );
};

export default connect(null, { filterTasks })(Filter);