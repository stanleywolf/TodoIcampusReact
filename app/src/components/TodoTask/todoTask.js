import React, { Component } from 'react';
import PropTypes from 'prop-types';




class TodoTask extends Component {

    static propTypes ={
        todos: PropTypes.array.isRequired
    }

    render(){
        return(
        <li className="task">
            <div className="task__title">{this.props.name}</div>
            <div className="task__date">{this.props.createdAt}</div>
            <div className="btn-wrapper">
                <button className="btn btn-done" >&#x2713;</button>
                <button className="btn btn-remove" onClick={() => this.props.onRemove(this.props.id)}>&#x2715;</button>
            </div>
        </li>
        )
    }
}

export default TodoTask;
