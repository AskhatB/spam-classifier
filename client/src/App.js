import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Chat from './container/Chat'

class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="logo"><img src="/assets/logo.png"/></div>
        <Chat />
      </div>
    );
  }
}

export default App;
