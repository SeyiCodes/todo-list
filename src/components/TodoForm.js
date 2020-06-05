import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { addTodo, updateTodo } from '../actions/TodoActions';
import M from 'materialize-css/dist/js/materialize.min.js';
const TodoForm = ({ addTodo, current, updateTodo }) => {
  const [value, setValue] = useState({ input: '' });

  useEffect(() => {
    if (current !== null) {
      setValue(current);
    } else {
      setValue({ input: '' });
    }
  }, [current]);
  const { id, input } = value;
  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };
  const handleSumbit = (e) => {
    e.preventDefault();
    if (value.input === '') {
      M.toast({ html: 'Please fill the field' });
    } else {
      if (current === null) {
        const newInput = {
          id,
          input,
        };
        addTodo(newInput);
        setValue({ input: '' });
      } else {
        const updatedInput = {
          id: current.id,
          input,
        };
        updateTodo(updatedInput);
        setValue({ input: '' });
      }
    }
  };

  return (
    <form className='form-inline' onSubmit={handleSumbit}>
      <input
        type='text'
        className='form-control mb-2 mr-sm-2'
        name='input'
        value={input}
        onChange={handleChange}
      />

      <input type='submit' className='btn btn-primary mb-2' />
    </form>
  );
};
const mapStateToProps = (state) => ({
  todo: state.todo,
});
export default connect(mapStateToProps, { addTodo, updateTodo })(TodoForm);
