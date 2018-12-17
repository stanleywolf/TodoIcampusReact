import React, { Component } from 'react';
import './App.css';
import InputBar from './components/inputBar/inputBar';

class TodoIcampusReact extends Component {
  render() {
    return (
      <div className="main-wraper">
        <InputBar />
      </div>
    );
  }
}

export default TodoIcampusReact;
