import { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Item from "./components/Item";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import ModalFormItem from "./components/ModalFormItem";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
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
            {/*Popup per aggiungere un To Do*/}

            <ModalFormItem fetchedItems={this.state.items} />

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
