import React, { Component } from "react";
import "../App.css";

class Item extends Component {
  constructor(props) {
    super();
    this.state = {
      description: "Fare la spesa",
      date: new Date(),
    };
  }

  isCompletedMessage() {
    return (
      <div class="notification is-primary is-light">
        Clicca qui per segnare il task come <strong>"Completato!"</strong>
      </div>
    );
  }

  render() {
    return (
      <div className="level">
        <div className="notification is-primary is-light">
          <button
            className="delete"
            onMouseOver={() => console.log("onMouseover funziona")}
          ></button>
          {this.state.description}
          {this.state.date}
          <hr />
          <div className="field is-grouped mt-5">
            <span></span>
            <p className="control">
              <button className="button is-primary is-outlined is-rounded is-small">
                Modifica
              </button>
            </p>
            <p className="control">
              <button className="button is-danger is-outlined is-rounded is-small">
                Cancella
              </button>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Item;
