import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListAlt } from "@fortawesome/free-solid-svg-icons";
import "../App.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <span className="tag is-primary is-large">
            <FontAwesomeIcon icon={faListAlt} className="mr-2" />
            To Do List
          </span>
          <label className="navbar-item">
            <span className="tag is-primary is-light is-medium">
              {this.todayDate()}
            </span>
          </label>
        </div>
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
      "Domenica",
      "Lunedi",
      "Martedi",
      "Mercoledi",
      "Giovedi",
      "Venerdi",
      "Sabato",
    ];

    todayDate =
      giorni[todayDate.getDay()] +
      " " +
      todayDate.getDate() +
      " " +
      mesi[todayDate.getMonth()] +
      " " +
      todayDate.getFullYear();

    return todayDate;
  }
}

export default Navbar;
