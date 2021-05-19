import React, { Component } from "react";
import { Button } from "react-bulma-components";
import axios from "axios";

class FormItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "",
      items: this.props.fetchedItems,
      onSubmitClose: this.props.onSubmitClose,
    };

    //
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
          let newItems = this.state.items.push(response.data);
          this.setState({
            items: newItems,
            //onSubmitClose: false,
          });
          //this.onClose()*/
        });
    };
  }

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        onSubmitClose={this.state.onSubmitClose}
      >
        <div className="field">
          <label className="label">Descrizione</label>
          <div className="control">
            <textarea
              type="text"
              className="textarea is-primary"
              name="description"
              placeholder="es. Andare dal dentista"
              onChange={this.handleChange}
              value={this.state.description}
            ></textarea>
          </div>
        </div>
        <div className="field is-grouped">
          <div className="control">
            <Button
              type="submit"
              className="button is-primary is-rounded"
              onClick={this.state.onSubmitClose}
            >
              Aggiungi
            </Button>
          </div>
        </div>
      </form>
    );
  }
}

export default FormItem;
