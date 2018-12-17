import React, { Component } from 'react';
import './App.css';
import InputBar from './components/inputBar/inputBar';
import TodoList from './components/TodoList/todoList';
import TodosContext from './AppContext'


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
  onDone =(id) =>{
    const {todos} = this.state

    this.setState({
      todos:todos.map((todo) =>{
        return {
          ...todo,
          isDone:todo.id === id ? !todo.isDone : todo.isDone
        }
      })
    })
  }
  render() {
    const actions = {
      onAdd: this.onAdd,
      onRemove: this.onRemove,
      onDone: this.onDone,
    }
    return (
      <div className="container">
        <TodosContext.Provider value={actions}>
          <InputBar />
           <TodoList todos={this.state.todos} /> 
           </TodosContext.Provider>           
      </div>
    );
  }
}

export default TodoIcampusReact;
