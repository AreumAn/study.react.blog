import React, { Component } from 'react';
//var React = require('react');   -> Before ES6
import './App.css';

class App extends Component {
  render() {
    const text = 'Test {} for javascript inside of JSX'
    const condition = true;
    const style = {
      backgroundColor: 'gray',
      border: '1px solid black',
      height: Math.round(Math.random() * 300) + 50,
      width: Math.round(Math.random() * 300) + 50,
      WebkitTransition: 'all',
      MozTransition: 'all',
      msTransition: 'all'
    };

    return (
       <div className='my-div'>
       { /* This is how to write comment */ }
          <h1>Hello</h1>
          <h2>I am studying.....</h2>
          <h3>{text}</h3>
          {
            condition && 'Show!'
          }
          <div style={style}
          // comment
          /* commnet */
          ></div>
       </div>
    );
  }
}

export default App;
