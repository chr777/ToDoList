import React, { Component } from 'react';

import './todolist.css';

class Addtodo extends Component{
    state = {
        message: ''
      }
      handleChange = (e) => {
        this.setState({
            message: e.target.value
        });
      }
      handleSubmit = (e) => {
        e.preventDefault();
        this.props.addtodo(this.state);
        this.setState({
            message: ''
        })
      }
      render() {
        return (
          <div>
            <form onSubmit={this.handleSubmit}>             
              <input type="text" placeholder="Type new To Do here and press enter..." onChange={this.handleChange} value={this.state.message} />
              <span onClick={this.handleSubmit} class="addBtn">Add</span>
            </form>
          </div>
        )
      }
    
}

export default Addtodo;
