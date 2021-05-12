import React, { Component } from "react";
import "./navbar.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <span className="tag is-primary is-large">To Do List</span>
        </div>
        <label className="navbar-brand-date">
          <span class="tag is-primary is-light is-medium">
            {this.todayDate()}
          </span>
        </label>
      </nav>
    );
  }

  todayDate() {
    let todayDate = new Date();
    const mesi = [
      "Gennaio",
      "Febbraio",
      "Marzo",
      "Aprile",
      "Maggio",
      "Giugno",
      "Luglio",
      "Agosto",
      "Settembre",
      "Ottobre",
      "Novembre",
      "Dicembre",
    ];

    const giorni = [
      " ",
      "Lunedi",
      "Martedi",
      "Mercoledi",
      "Giovedi",
      "Venerdi",
      "Sabato",
      "Domenica",
    ];

    todayDate =
      giorni[todayDate.getDay()] +
      " " +
      todayDate.getDate() +
      " " +
      mesi[todayDate.getMonth()] +
      " " +
      todayDate.getFullYear();

    console.log(todayDate);

    return todayDate;
  }
}

export default Navbar;