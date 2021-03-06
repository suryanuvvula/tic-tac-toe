import React, { Component } from "react";

export class Board extends Component {
  generateTiles = () => {
    let allTiles = [];
    for (let i = 0; i < 9; i++) {
      allTiles.push("tile not-played");
    }
    return allTiles;
  };

  handleClick = (event) => {
    const { handleScore, endGame } = this.props;
    let tile = event.target;
    if (tile.classList.length === 2) {
      this.play(tile);
    }

    let allTiles = document.getElementsByClassName("not-played");
    if (allTiles.length < 1) {
      handleScore("ties");
      endGame(true);
      this.reset();
    }
  };

  play = (tile) => {
    const { player1, player2, turn, handleScore, endGame } = this.props;
    tile.classList.remove("not-played");
    if (player1) {
      tile.innerHTML = "x";
      turn("player1", false, "player2", true);
      if (this.diagonal("x") || this.row("x") || this.column("x")) {
        handleScore("player1");
        endGame(true);
        this.reset();
      }
    }

    if (player2) {
      tile.innerHTML = "o";
      turn("player2", false, "player1", true);
      if (this.diagonal("o") || this.row("o") || this.column("o")) {
        handleScore("player2");
        endGame(true);
        this.reset();
      }
    }
  };

  diagonal = (play) => {
    let left = [
      document.getElementById("tile0").innerHTML,
      document.getElementById("tile4").innerHTML,
      document.getElementById("tile8").innerHTML,
    ];

    let right = [
      document.getElementById("tile2").innerHTML,
      document.getElementById("tile4").innerHTML,
      document.getElementById("tile6").innerHTML,
    ];

    if (row1[0] == play && row1[1] == play && row1[2] == play) {
      return true;
    }
    if (row2[0] == play && row2[1] == play && row2[2] == play) {
      return true;
    }
    if (row3[0] == play && row3[1] == play && row3[2] == play) {
      return true;
    }
    return false;
  };

  column = (play) => {
    let column1 = [
      document.getElementById("tile0").innerHTML,
      document.getElementById("tile3").innerHTML,
      document.getElementById("tile6").innerHTML,
    ];

    let column2 = [
      document.getElementById("tile1").innerHTML,
      document.getElementById("tile4").innerHTML,
      document.getElementById("tile7").innerHTML,
    ];

    let column3 = [
      document.getElementById("tile2").innerHTML,
      document.getElementById("tile5").innerHTML,
      document.getElementById("tile8").innerHTML,
    ];

    if (column1[0] == play && column1[1] == play && column1[2] == play) {
      return true;
    }
    if (column2[0] == play && column2[1] == play && column2[2] == play) {
      return true;
    }
    if (column3[0] == play && column3[1] == play && column3[2] == play) {
      return true;
    }
    return false;
  };

  reset = () => {
    let allTiles = document.getElementsByClassName("tile");
    for (let i = 0; i < allTiles.length; i++) {
      allTiles[i].innerHTML = "";
      allTiles[i].classList.add("not-played");
    }
  };

  render() {
    return (
      <div className="board">
        {this.generateTiles().map((element, i) => {
          return (
            <div
              id={`tile${i}`}
              key={i}
              className={element}
              onClick={this.handleClick}
            />
          );
        })}
      </div>
    );
  }
}

export default Board;
