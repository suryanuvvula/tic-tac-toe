import React, { Component } from "react";

export class UserInfo extends Component {
  state = {
    player1: "",
    player1: "",
  };

  handleChange = (event) => {
    let player = event.target.id;
    this.setState({ [player]: event.target.value });
  };

  handleClick = (event) => {
    event.preventDefault();
    const { player1, player2 } = this.state;
    this.props.names(player, player2);
  };

  render() {
    return (
      <div className="wrapper">
        <div className="screen">
          <form>
            <div class="form-group">
              <label>Player1 Name</label>
              <input
                type="text"
                id="player1"
                className="form-control"
                onChange={this.handleChange}
              ></input>

              <label>Player2 name</label>
              <input
                type="text"
                id="player1"
                className="form-control"
                onChange={this.handleChange}
              ></input>
              <button onClick={this.handleClick} className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default UserInfo;
