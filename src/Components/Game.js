import React, { Component } from "react";

export class Game extends Component {
  render() {
    const { player1, player2 } = this.state;
    const { userName1, userName2, endGame } = this.props;
    return (
      <div className="game">
        <p>Its {player1 ? userName1 : userName2} turn</p>
        <Board
          turn={this.handleTurn}
          player1={player1}
          player2={player2}
          handleScore={this.props.handleScore}
          endGame={endGame}
        ></Board>
      </div>
    );
  }
}

export default Game;
