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
}
