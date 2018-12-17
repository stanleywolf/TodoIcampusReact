import React, { Component } from 'react';

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
        <button 
          onClick={this.onAdd}
          type='submit'>Add</button>
      </div>
    );
  }
}

export default InputBar;