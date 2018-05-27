import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Chat from './container/Chat'

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>Spam Classifier</h1>
        <Chat />
      </div>
    );
  }
}

export default App;
