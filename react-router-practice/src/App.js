import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { 
  Home, 
  About,
  Posts 
} from 'pages';
import Menu from './components/Menu';
import AsyncSplitMe from './components/AsyncSplitMe';


class App extends Component {
  render() {
    return (
      <div>
      <Menu />
      <AsyncSplitMe />
        <Route exact path="/" component={Home} />
        <Route path="/about/:name?" component={About} />
        <Route path="/posts" component={Posts} />
      </div>
    );
  }
}

export default App;
