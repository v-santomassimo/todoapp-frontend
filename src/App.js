import { Component } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Item from "./components/item";

class App extends Component {
  constructor() {
    super();
    this.state = {
      items: [
        { id: 0, description: "Fare la spesa", date: new Date() },
        { id: 1, description: "Andare dal dentista", date: new Date() },
        { id: 2, description: "Appuntamento con Teresa", date: new Date() },
        { id: 3, description: "Comprare il detersivo", date: new Date() },
        { id: 4, description: "Fare il bucato", date: new Date() },
      ],
      showPopup: false,
    };
    this.handleShowPopup = this.handleShowPopup.bind(this);
  }

  handleShowPopup() {
    if (this.state.showPopup === false) {
      this.setState({ showPopup: true });
    }

    console.log(this.state.showPopup);
  }

  render() {
    let popup;
    if (this.state.showPopup === true) {
      return (popup = (
        <div className="modal">
          <div className="modal-background"></div>
          <div className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title">Aggiungi To Do</p>
              <button className="delete" aria-label="close"></button>
            </header>
            <section className="modal-card-body">
              Sarò una form per aggiungere item.
            </section>
            <footer className="modal-card-foot">
              <button className="button is-success">Salva</button>
              <button className="button">Indietro</button>
            </footer>
          </div>
        </div>
      ));
    }
    return (
      <>
        <Navbar />
        <div className="section">
          <button
            className="button is-primary is-rounded"
            value="Click to Open Popup"
            onClick={this.handleShowPopup}
          >
            Aggiungi
          </button>
          {popup}
          <table className="table is-fullwidth mt-4">
            <tr>
              <td>
                {this.state.items.map((item) => (
                  <Item
                    key={item.id}
                    description={item.description}
                    date={item.date}
                  />
                ))}
              </td>
            </tr>
          </table>
        </div>
      </>
    );
  }
}

export default App;
