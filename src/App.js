import React, { Component } from 'react';
import './App.css';

class App extends Component {

constructor() {
    super();
    this.state = {
        turn: 'X',
        gameEnded: false
    }
  }

clicked(event) {
  console.log(event.target)
  event.target.innerText = this.state.turn;
  this.setState({
    turn: this.state.turn == 'X' ? 'O' : 'X'
  })
}

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Tic-Tac-Toe Exercise</h2>
        </div>
        <div id="game">
          <div id="head">
              
          </div>
          <div id="board" onClick={(e)=>this.clicked(e)}>
              <div className="square" data-square="0"></div>
              <div className="square" data-square="1"></div>
              <div className="square" data-square="2"></div>
              <div className="square" data-square="3"></div>
              <div className="square" data-square="4"></div>
              <div className="square" data-square="5"></div>
              <div className="square" data-square="6"></div>
              <div className="square" data-square="7"></div>
              <div className="square" data-square="8"></div>
          </div>
      </div>      
      </div>
    );
  }
}

export default App;
