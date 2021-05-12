import React, { Component } from "react";

class Popup extends Component {
  state = {
    showPopup: false,
  };

  render() {
    return (
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
}

export default Popup;
