import React, { Component } from "react";
import "./navbar.css";

class Item extends Component {
  state = {
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit",
    isCompleted: false,
    //array di oggetti ToDo;
  };

  isCompletedMessage() {
    return (
      <div class="notification is-primary is-light">
        Clicca qui per segnare il task come <strong>"Completato!"</strong>
      </div>
    );
  }

  render() {
    return (
      <div className="notification is-primary is-light">
        <button
          className="delete"
          onMouseOver={this.isCompletedMessage}
        ></button>
        {this.state.description}
        {/*{this.state.date}*/}
        <div className="field is-grouped mt-5">
          <span></span>
          <p className="control">
            <button className="button is-primary is-outlined is-rounded is-small">
              Modifica
            </button>
          </p>
          <p className="control">
            <button className="button is-danger is-outlined is-rounded is-small">
              Cancel
            </button>
          </p>
        </div>
      </div>
    );
  }
}

export default Item;
