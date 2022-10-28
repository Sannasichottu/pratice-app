import React, { Component } from "react";

export default class ShouldComponentUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = { favoritecolor: "red" };
  }
  shouldComponentUpdate() {
    return false;
  }
  changeColor = () => {
    this.setState({ favoritecolor: "green" });
  };
  render() {
    return (
      <div>
        <hr />
        <h2 style={{ color: "red" }}>ShouldComponentUpdate</h2>
        <h1>My Favorite Color is {this.state.favoritecolor}</h1>
        <button type="button" onClick={this.changeColor}>
          Change color
        </button>
      </div>
    );
  }
}
