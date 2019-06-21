import React from 'react';

const Todos = ({todos, deleteTodo}) => {

    const todoList = todos.length ? (
      todos.map(todo => {
        return (
          <div className="item" key={todo.id}>
            <span onClick={() => {deleteTodo(todo.id)}}>{todo.message}</span>
          </div>
        )
      })
    ) : (
      <p className="center">There is no To Do left</p>
    );
    return (
      <div className="todos">
        {todoList}
      </div>
    )
  }
  export default Todos;