import React, { Component } from "react";

export class GameResults extends Component {
  state = {
    tied: "You guys tied",
    playerWin: "Congrats!! You win " + this.props.winner,
  };

  handleClick = () => {
    this.props.endGame(false);
  };

  render() {
    const { winner } = this.props;
    const { tied, playerWin } = this.state;
    return (
      <div className="wrapper">
        <div className="screen">
          <p> {winner === "Tied" ? tied : playerWin}</p>
          <button className="btn btn-primary" onClick={this.handleClick}>
            Want to play again?
          </button>
        </div>
      </div>
    );
  }
}

export default GameResults;
