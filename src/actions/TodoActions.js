import {
  ADD_TODO,
  GET_TODO,
  UPDATE_TODO,
  DELETE_TODO,
  SET_CURRENT,
} from './types';

export const getTodo = () => async (dispatch) => {
  try {
    const res = await fetch('/todos');
    const data = await res.json();
    dispatch({
      type: GET_TODO,
      payload: data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const addTodo = (todo) => async (dispatch) => {
  // return {
  //   type: ADD_TODO,
  //   payload: todo,
  // };
  try {
    const res = await fetch('/todos', {
      method: 'POST',
      body: JSON.stringify(todo),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();
    dispatch({
      type: ADD_TODO,
      payload: data,
    });
  } catch (err) {
    console.log(err);
  }
};
export const updateTodo = (todo) => async (dispatch) => {
  try {
    const res = await fetch(`/todos/${todo.id}`, {
      method: 'PUT',
      body: JSON.stringify(todo),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();
    dispatch({
      type: UPDATE_TODO,
      payload: data,
    });
  } catch (err) {
    console.log(err);
  }
};
export const deleteTodo = (id) => async (dispatch) => {
  try {
    await fetch(`/todos/${id}`, {
      method: 'DELETE',
    });
    dispatch({
      type: DELETE_TODO,
      payload: id,
    });
  } catch (err) {
    console.log(err);
  }
};

export const setCurrent = (todo) => {
  return {
    type: SET_CURRENT,
    payload: todo,
  };
};
