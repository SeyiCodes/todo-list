import {
  ADD_TODO,
  GET_TODO,
  UPDATE_TODO,
  DELETE_TODO,
  SET_CURRENT,
} from '../actions/types';

const intialState = {
  todos: null,
  current: null,
};

export default function (state = intialState, action) {
  switch (action.type) {
    case GET_TODO:
      return {
        ...state,
        todos: action.payload,
      };
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id ? action.payload : todo
        ),
        current: null,
      };

    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      };
    default:
      return state;
  }
}
