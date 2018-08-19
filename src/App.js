import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Square from './Square';
import SimpleSquare from './SimpleSquare';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <SimpleSquare color="red" size={50} />
        <Square size={100} initialColor="green" />
        <Square size={200} initialColor="red" />
      </div>
    );
  }
}
export default App;
