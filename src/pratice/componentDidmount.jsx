import React, { Component } from "react";

export default class ComponentDidmount extends Component {
  constructor(props) {
    super(props);
    this.state = { favoritecolor: "red" };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ favoritecolor: "yellow" });
    }, 1000);
  }
  render() {
    return (
      <div>
        <hr />
        <h2 style={{ color: "red" }}>ComponentDidmount</h2>
        <h1>My Favorite Color is {this.state.favoritecolor}</h1>
      </div>
    );
  }
}
