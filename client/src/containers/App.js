import React, { Component } from 'react';
import './App.css';
import { hot } from 'react-hot-loader';

class App extends Component {
  render() {
    return <div className="App">Hello</div>;
  }
}

export default hot(module)(App);