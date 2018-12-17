import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodoContext from '../../AppContext'


class TodoTask extends Component {

    static propTypes ={
        todos: PropTypes.array.isRequired
    }

    render(){
        return(
        <li className={`task ${this.props.isDone && 'done'}`}>
            <div className="task__title">{this.props.name}</div>
            <div className="task__date">{this.props.createdAt}</div>
            <div className="btn-wrapper">
            <TodoContext.Consumer>
             {(actions) => {
                 return(
                     <button
                         className="btn btn-done"
                         onClick={() =>{
                             actions.onDone(this.props.id)
                            }}>&#x2713;
                    </button>
                 )}}
             </TodoContext.Consumer>
             <TodoContext.Consumer>
             {(actions) => {
                 return(
                     <button
                         className="btn btn-remove"
                         onClick={() =>{
                             actions.onRemove(this.props.id)
                            }}>&#x2715;
                    </button>
                 )}}
             </TodoContext.Consumer>         

            </div>
        </li>
        )
    }
}

export default TodoTask;
