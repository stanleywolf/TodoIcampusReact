import React, { Component } from 'react';

class InputBar extends Component {
    
  render() {
    return (
      <div className='container'>
        <input type="text" placeholder='Task name...' val='asdf'></input>
        <button type='submit'>Add</button>
      </div>
    );
  }
}

export default InputBar;