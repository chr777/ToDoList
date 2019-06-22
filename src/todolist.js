import React from 'react';
import './todolist.css';

const Todos = ({todos, deleteTodo}) => {

    const todoList = todos.length ? (
      todos.map(todo => {
        return (
          <li className="item" key={todo.id}>
            <span>{todo.message}</span>
            <span id = "delate" onClick={() => {deleteTodo(todo.id)}}>x</span>
          </li>
        )
      })
    ) : (
        <li>
            <span>There is no To Do left</span>          
        </li>
      
    );
    return (
      <ul className="todos">
        {todoList}
      </ul>
    )
  }
  export default Todos;