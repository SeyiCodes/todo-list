import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import TodoListItem from './TodoListItem';
import { getTodo } from '../actions/TodoActions';
const TodoList = ({ todo: { todos }, getTodo }) => {
  useEffect(() => {
    getTodo();
  }, [getTodo]);
  return (
    <ul className='list-group ' style={{ width: '700px', marginLeft: '5rem' }}>
      {todos === null ? (
        <p className='center'> No list to show...</p>
      ) : (
        todos.map((todo) => <TodoListItem key={todo.id} todo={todo} />)
      )}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  todo: state.todo,
});
export default connect(mapStateToProps, { getTodo })(TodoList);
