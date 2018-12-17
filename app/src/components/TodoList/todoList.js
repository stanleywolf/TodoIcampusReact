import React, { Component } from 'react';
import TodoTask from '../TodoTask/todoTask';

export default class TodoList extends Component {
    constructor(){
      super()

    }
    render(){
        return (
            <ul className="tasks">
                {this.props.todos.map((todo, index) =>{
                    return <TodoTask  onRemove={this.props.onRemove} todo={todo} {...todo}/>
                })}               
            </ul>
        )
    }
}