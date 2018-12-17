import React, { Component } from 'react';
import './App.css';
import InputBar from './components/inputBar/inputBar';
import TodoList from './components/TodoList/todoList';

class TodoIcampusReact extends Component {

  state = {
    todos: [{
      id: 0,
      isDone: false,
      name: 'stancho',
      createdAt: '',
      updatedAt: null
    }]
  }

  onAdd = (value) => {
      let state = this.state
      state.todos.unshift({
        id: +new Date, 
        name: value, 
        createdAt: new Date().toUTCString(), 
        isDone: false})
      this.setState(state)
    }
  onRemove =(id) =>{
    let state = this.state
    state.todos = state.todos.filter((todo) => {
      return todo.id !== id;
    })
    this.setState(state)
  }
  render() {

    return (
      <div className="container">
        <InputBar onAdd={this.onAdd}/>
        <TodoList onRemove={this.onRemove} todos={this.state.todos} />            
      </div>
    );
  }
}

export default TodoIcampusReact;
