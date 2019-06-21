import React, { Component } from 'react';
import Todos from './todolist'

import './App.css';

class App extends Component {
  state = {
    todos: [
      {id: 1, message: 'do homework'},
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
      <div className="container">
        <h1 className="text">To Do List</h1>
        <div className="list">
          <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        </div>
      </div>
      
    );
  }
}



export default App;
