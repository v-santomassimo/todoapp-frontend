import { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Item from "./components/Item";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Modal, Button } from "react-bulma-components";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      showPopup: false,
      isLoaded: false,
    };

    this.handleClose = () => this.setState({ showPopup: false });
    this.handleShow = () => this.setState({ showPopup: true });
    this.handleChange = (event) => {
      this.setState({ description: event.target.value });
    };
    this.handleSubmit = (event) => {
      event.preventDefault(); //evita il comportamento di default di un evento;
      const newItem = { description: this.state.description };

      axios
        .post("http://localhost:8080/vsan/todo-app/addToDo", newItem)
        .then((response) => {
          console.log(response);
          console.log(response.data);
          let newItems = this.state.items.push(newItem);
          this.setState({
            items: [...this.state.items, newItems],
            //onSubmitClose: false,
          });
          this.handleClose();
        });
    };
  }

  componentDidMount = () => {
    axios
      .get("http://localhost:8080/vsan/todo-app/todo")
      .then((response) =>
        this.setState({ items: response.data, isLoaded: true })
      );
  };

  render() {
    if (this.state.isLoaded) {
      return (
        <>
          {/*NAVBAR*/}
          <Navbar />

          <div className="container">
            {/*Button che apre il popup per aggiungere To Dos*/}
            <button
              className="button is-primary is-rounded"
              value="Click to Open Popup"
              onClick={this.handleShow}
            >
              <FontAwesomeIcon icon={faPlus} className="mr-2" />
              Aggiungi
            </button>

            {/*Popup per aggiungere un To Do*/}
            <Modal show={this.state.showPopup} onClose={this.handleClose}>
              <Modal.Card>
                <Modal.Card.Header>
                  <Modal.Card.Title>Aggiungi To Do</Modal.Card.Title>
                </Modal.Card.Header>
                <Modal.Card.Body>
                  <form onSubmit={this.handleSubmit} onClose={this.handleClose}>
                    <div className="field">
                      <label className="label">Descrizione</label>
                      <div className="control">
                        <textarea
                          type="text"
                          className="textarea is-primary"
                          name="description"
                          placeholder="es. Andare dal dentista"
                          onChange={this.handleChange}
                          //value={this.state.description}
                        ></textarea>
                      </div>
                    </div>
                    <div className="field is-grouped">
                      <div className="control">
                        <Button
                          type="submit"
                          className="button is-primary is-rounded"
                          //onClick={this.handleClose}
                        >
                          Aggiungi
                        </Button>
                      </div>
                    </div>
                  </form>
                </Modal.Card.Body>
                <Modal.Card.Footer>
                  <Button
                    className="button secondary is-rounded"
                    onClick={this.handleClose}
                  >
                    Indietro
                  </Button>
                </Modal.Card.Footer>
              </Modal.Card>
            </Modal>

            <div className="row">
              {this.state.items.map((item, index) => {
                return (
                  <div className="col-lg-4 my-3">
                    <Item key={index} todo={item} />
                  </div>
                );
              })}
            </div>
            {/*Se non ci sono To Dos, mostro un messaggio:(però non funziona)}
            {this.state.items > 0 ? (
              <div className="row">
                {this.state.items.map((item) => {
                  return (
                    <div className="col-lg-4 my-3">
                      <Item key={item.id} todo={item} />
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="level">
                <div className="level-item is-centered">
                  <div className="tag is-danger is-light is-rounded is-large">
                    <h1>Ops...Non ci sono elementi!</h1>
                  </div>
                </div>
              </div>
            )*/}
          </div>
        </>
      );
    } else {
      return (
        <>
          <Navbar />
          <div className="container">
            <div className="level">
              <div className="level-item is-centered">
                <div className="tag is-primary is-light is-rounded is-large">
                  <h1>Caricamento...</h1>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    }
  }
}

export default App;
