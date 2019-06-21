import React, { Component } from 'react';
import Todos from './todolist'

import './App.css';

class App extends Component {
  state = {
    todos: [
      {id: 1, message: 'do homeworks'},
      {id: 2, message: 'play games'}

    ]
  }

  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      todos
    });
  }

  render() {
    return (
      <div className="todolist list_container">
        <h1 className="text">Todo's</h1>
        <Todos todos={this.state.todos}  />
      </div>
    );
  }
}



export default App;
