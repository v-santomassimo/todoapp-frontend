import { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Item from './components/Item';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
//import { Modal, Button } from "react-bootstrap";
import { Modal, Button } from 'react-bulma-components';

import 'bootstrap/dist/css/bootstrap.min.css';
//import "bulma//css/bulma.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopup: false,
      items: [],
      isLoaded: false,
    };
    this.handleClose = () => this.setState({ showPopup: false });
    this.handleShow = () => this.setState({ showPopup: true });
  }

  componentDidMount = () => {
    this.setState({
      items: [
        ...this.state.items,
        {
          id: 0,
          description: 'Fare la spesa',
          date: new Date().toDateString(),
          isCompleted: false,
        },
        {
          id: 1,
          description: 'Andare dal dentista',
          date: new Date().toDateString(),
          isCompleted: false,
        },
        {
          id: 2,
          description: 'Appuntamento con Teresa',
          date: new Date().toDateString(),
          isCompleted: false,
        },
        {
          id: 3,
          description: 'Comprare il detersivo',
          date: new Date().toDateString(),
          isCompleted: false,
        },
        {
          id: 4,
          description: 'Fare il bucato',
          date: new Date().toDateString(),
          isCompleted: false,
        },
      ],
      isLoaded: true,
    });
  };

  render() {
    if (this.state.isLoaded) {
      return (
        <>
          <Modal show={this.state.showPopup} onClose={this.handleClose}>
            <Modal.Card>
              <Modal.Card.Header showClose="false">
                <Modal.Card.Title>Aggiungi To Do</Modal.Card.Title>
              </Modal.Card.Header>
              <Modal.Card.Body>
                <form>
                  <div className="field">
                    <label className="label">Descrizione</label>
                    <div className="control">
                      <textarea className="textarea is-primary" placeholder="es. Andare dal dentista"></textarea>
                    </div>
                  </div>
                  <div className="field is-grouped">
                    <div className="control">
                      <Button className="button is-primary is-rounded" onClick={this.handleClose}>
                        Aggiungi
                      </Button>
                    </div>
                    <div className="control">
                      <Button className="button secondary is-rounded" onClick={this.handleClose}>
                        Indietro
                      </Button>
                    </div>
                  </div>
                </form>
              </Modal.Card.Body>
            </Modal.Card>
          </Modal>

          <Navbar />

          <div className="container">
            <button className="button is-primary is-rounded" value="Click to Open Popup" onClick={this.handleShow}>
              <FontAwesomeIcon icon={faPlus} className="mr-2" />
              Aggiungi
            </button>
            <div className="row">
              {this.state.items.map((item) => {
                return (
                  <div className="col-lg-4 my-3">
                    <Item key={item.id} todo={item} />
                  </div>
                );
              })}
            </div>
          </div>
        </>
      );
    } else {
      return (
        <>
          <Navbar />
          <div className="container">
            <p>Loading...</p>
          </div>
        </>
      );
    }
  }
}

export default App;
