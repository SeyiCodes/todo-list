import React, { useState } from 'react';
import { connect } from 'react-redux';
import { deleteTodo, setCurrent } from '../actions/TodoActions';

const TodoListItem = ({ todo, deleteTodo, setCurrent }) => {
  const [isComplete, setIsComplete] = useState(false);
  const handleDelete = () => {
    deleteTodo(todo.id);
  };
  const handleComplete = () => {
    setIsComplete(!isComplete);
  };
  let classes = 'btn btn-sm ';
  if (isComplete) {
    classes += 'green';
  } else {
    classes += 'grey';
  }
  return (
    <li className='list-group-item'>
      <a href='#' className={isComplete ? 'green-text' : 'black-text'}>
        {todo.input}
      </a>

      <button
        type='button'
        className={classes}
        onClick={handleComplete}
        style={{ float: 'right', marginLeft: '.5rem' }}
      >
        {isComplete ? 'Complete' : 'Incomplete'}
      </button>
      <button
        type='button'
        className='btn red btn-sm black-text'
        onClick={handleDelete}
        style={{ float: 'right', marginLeft: '.5rem' }}
      >
        Delete
      </button>
      <button
        type='button'
        className='btn yellow btn-sm black-text'
        style={{ float: 'right' }}
        onClick={() => setCurrent(todo)}
      >
        Edit
      </button>
    </li>
  );
};

export default connect(null, {
  deleteTodo,
  setCurrent,
})(TodoListItem);
