import React, { Component } from 'react';
import TodoContext from '../../AppContext'
class InputBar extends Component {
    constructor(){
      super()

      this.state = ({
        value:''
      })
    }
onChange = (event) =>{
  this.setState({
    value:event.target.value
  })
}
onAdd = () =>{
  this.props.onAdd(this.state.value)
}
  render() {
    return (
      <div className='container'>
        <input 
          onChange={this.onChange}
          type="text" 
          placeholder='Task name...' 
          value={this.state.value}>
        </input>
          <TodoContext.Consumer>
           {(actions) => {
             return(
              <button 
                onClick={() =>{
                  actions.onAdd(this.state.value)
                }} type='submit'>Add
              </button>
             )}}
          </TodoContext.Consumer>
      </div>
    );
  }
}

export default InputBar;