import React, { Component } from 'react';
import Board from "./Board/Board";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">SOS</h1>
        </header>
        <p className="App-intro">
          Two players. Toggle between S and O keywords.
        </p>
        <main>
          <Board rows="10" cols="10" />
        </main>
      </div>
    );
  }
}

export default App;
