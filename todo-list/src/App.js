import React, { Component } from 'react';
import './App.css';
import MyComponent from './MyComponent';

class App extends Component {
  render() {
    return (
      <MyComponent name="react" age={4}/>
    );
  }
}

export default App;
