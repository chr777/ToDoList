import React, { Component } from 'react';
import Addtodo from './Addtodo';
import Todos from './todolist';


import './App.css';

class App extends Component {
  state = {
    todos: [
      {id: 1, message: 'do homework', isInEditMode: false},
      {id: 2, message: 'play games', isInEditMode: false}
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
  addtodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos
    });
  }

  // changeEditMode = () => {
  //   this.setState({
  //     isInEditMode: !this.state.isInEditMode 
  //   })
  // }

  // renderEditView = () => {
  //   return (
  //     <div className="container">
  //       <h1 className="text">To Do List</h1>
  //       <div className="list">
  //         <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
  //         <Addtodo addtodo={this.addtodo}/>
  //       </div>
  //     </div>
  //   )
  // }

  render() {
    return (
      <div className="container">
        <h1 className="text">To Do List</h1>
        <div className="list">
          <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
          <Addtodo addtodo={this.addtodo}/>
        </div>
      </div>      
    );
  }
}



export default App;
