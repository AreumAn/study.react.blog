import React, { Component } from 'react';
import './App.css';
import MyComponent from './MyComponent';
import EventPractice from './EventPractice';

class App extends Component {
  render() {
    return (
      <div>
        <EventPractice/>
        <hr />
        <MyComponent name='react' age={4}/>
      </div>
    );
  }
}

export default App;
