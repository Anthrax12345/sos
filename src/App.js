import React, { Component } from 'react';
import Board from "./Board/Board";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { rows: 10, cols: 10 }
    let settings = {
      rows: 10,
      cols: 10,
    }
    this.state.settings = settings;
    this.gameOverCounter = 0;
  }

  createGrid(rows, cols) {
    let matrix = [];
    for (let i = 0; i < rows; i++) {
      matrix[i] = [];
      for (let j = 0; j < cols; j++) {
        matrix[i][j] = 'unset';
      }
    }
    return matrix;
  }

  updateGridValue(rows, cols, value) {
    this.gameOverCounter++;
    this.setState(function (prevState, props) {
      prevState.grid[rows][cols] = value;
      return { grid: prevState.grid }
    })
  }

  checkForGameOver(){
    if(this.gameOverCounter >= rows * cols){
      alert("GAME OVER");
    }
  }

  

  componentWillMount() {
    this.state.grid = this.createGrid(this.state.rows, this.state.cols);
  }
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
          <Board {...this.state.settings} />
        </main>
      </div>
    );
  }
}

export default App;
