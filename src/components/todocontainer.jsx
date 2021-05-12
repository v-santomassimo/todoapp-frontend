import React, { Component } from "react";
import Item from "./item";
//import Popup from "./popup";
import "./navbar.css";

class TodoContainer extends Component {
  state = {
    showPopup: false,
  };

  handleShowPopup() {
    if (this.showPopup === false) {
      this.setState({ showPopup: true });
    }
  }

  render() {
    let popup;

    if (this.state.showPopup === true) {
      popup = (
        <div class="modal">
          <div class="modal-background"></div>
          <div class="modal-card">
            <header class="modal-card-head">
              <p class="modal-card-title">Aggiungi To Do</p>
              <button class="delete" aria-label="close"></button>
            </header>
            <section class="modal-card-body">
              Sarò una form per aggiungere item.
            </section>
            <footer class="modal-card-foot">
              <button class="button is-success">Salva</button>
              <button class="button">Indietro</button>
            </footer>
          </div>
        </div>
      );
    }

    return (
      <div className="section">
        <button
          className="button is-primary is-rounded"
          value="Click to Open Popup"
          onClick={this.handleShowPopup()}
        >
          Aggiungi
        </button>

        {popup}

        <table className="table is-fullwidth mt-4">
          <tr>
            <td>
              <Item></Item>
            </td>
            <td>
              <Item></Item>
            </td>
            <td>
              <Item></Item>
            </td>
            <td>
              <Item></Item>
            </td>
          </tr>
          <tr>
            <td>
              <Item></Item>
            </td>
            <td>
              <Item></Item>
            </td>
            <td>
              <Item></Item>
            </td>
            <td>
              <Item></Item>
            </td>
          </tr>
        </table>
      </div>
    );
  }
}

export default TodoContainer;
