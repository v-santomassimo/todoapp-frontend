import React, { Component } from "react";
import "./navbar.css";

class Item extends Component {
  state = {
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit",
    isCompleted: false,
    //array di oggetti ToDo;
  };
  render() {
    return (
      <div className="notification is-primary is-light">
        <button className="delete"></button>
        {this.state.description}
        {/*{this.state.date}*/}
        <label className="checkbox">
          <input type="checkbox" />
          <strong>Completato</strong>
          {/*</input>{this.state.isCompleted ? "Completato!" : "Da completare"}*/}
        </label>
      </div>
    );
  }
}

export default Item;
