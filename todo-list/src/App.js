import React, { Component } from 'react';
import './App.css';
import MyComponent from './MyComponent';
import EventPractice from './EventPractice';
import ValidationSample from './ValidationSample';
import ScrollBox from './ScrollBox';
import IterationSample from './IterationSample';
import LifeCycleSample from './LifeCycleSample';
import FunctionalComp from './FunctionalComp';


function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {
  state = {
    color: '#000000'
  }

  handleClick = () => {
    this.setState({
      color: getRandomColor()
    })
  }
  render() {
    return (
      <div>
        <FunctionalComp name='Functional Component' />
        <hr />
        <button onClick={this.handleClick}>Random Color</button>
        <LifeCycleSample color={this.state.color} />
        <hr />
        <IterationSample />
        <hr />
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
