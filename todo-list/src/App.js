import React, { Component } from 'react';
import './App.css';
import MyComponent from './MyComponent';
import EventPractice from './EventPractice';
import ValidationSample from './ValidationSample';
import ScrollBox from './ScrollBox';

class App extends Component {
  render() {
    return (
      <div>
        <ScrollBox ref={(ref) => this.scrollBox=ref}/>
        <button onClick={() => this.scrollBox.scrollToBottom()}>Go to Bottom</button>
        <hr />
        <ValidationSample />
        <hr />
        <EventPractice/>
        <hr />
        <MyComponent name='react' age={4}/>
      </div>
    );
  }
}

export default App;
