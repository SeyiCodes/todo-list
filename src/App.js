import React, { Fragment, useEffect } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';
import { connect } from 'react-redux';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
const App = ({ current }) => {
  useEffect(() => {
    M.AutoInit();
  });
  return (
    <Fragment>
      <div className='container mt-5' style={{ textAlign: 'center' }}>
        <h2>To-do List</h2>
        <div style={{ marginLeft: '5rem' }}>
          <TodoForm current={current} />
          <TodoList />
        </div>
      </div>
    </Fragment>
  );
};
const mapStateToProps = (state) => ({
  current: state.todo.current,
});
export default connect(mapStateToProps, null)(App);
