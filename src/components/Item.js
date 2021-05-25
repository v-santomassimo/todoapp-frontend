import React, { Component } from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: this.props.todo,
      updateDescription: this.props.todo.description,
      onModify: false,
    };
  }

  handleEdit = () => {
    this.setState({
      onModify: !this.state.onModify,
      updateDescription: this.state.todo.description,
    });
  };

  handleUpdate = (event) => {
    event.preventDefault(); //evita il comportamento di default di un evento;
    let updatedTodo = {
      id: this.state.todo.id,
      description: this.state.updateDescription,
      creationDate: this.state.todo.creationDate,
      completed: this.state.todo.completed,
    };

    this.setState({
      todo: {
        ...this.state.todo,
        description: this.state.updateDescription,
      },
    });

    axios
      .put("http://localhost:8080/vsan/todo-app/update", updatedTodo)
      .then((response) => {
        this.setState({ onModify: false });
      });
  };

  handleChange = (event) => {
    this.setState({ updateDescription: event.target.value });
  };

  handleToggle = () => {
    this.setState({
      todo: {
        ...this.state.todo,
        completed: !this.state.todo.completed,
      },
    });

    axios
      .get(
        "http://localhost:8080/vsan/todo-app/completed/" + this.state.todo.id
      )
      .then((response) => console.log(response.data));
  };

  render() {
    return (
      <div
        className={
          this.state.todo.completed && !this.state.onModify
            ? "notification is-primary is-light"
            : "notification is-warning is-light"
        }
        onDoubleClick={!this.state.onModify ? this.handleToggle : () => {}}
        title="Clicca due volte se hai completato il To Do!"
      >
        <div className="buttons is-grouped is-right">
          {this.state.todo.completed && !this.state.onModify ? (
            <h6 className="mr-5">
              <FontAwesomeIcon icon={faThumbsUp} className="mx-2" size="lg" />
              Completato!
            </h6>
          ) : (
            ""
          )}
          {!this.state.onModify ? (
            <>
              <button
                title="Modifica"
                onClick={this.handleEdit}
                className="button is-primary is-outlined is-rounded is-small"
              >
                <FontAwesomeIcon icon={faEdit} size="lg" />
              </button>
              <button
                title="Elimina To Do"
                className="button is-danger is-outlined is-rounded is-small"
                onClick={() => this.props.onDelete(this.props.todo.id)}
              >
                <FontAwesomeIcon icon={faTimes} size="lg" />
              </button>
            </>
          ) : (
            <>
              <button
                title="Annulla"
                onClick={this.handleEdit}
                className="button is-info is-outlined is-rounded is-small"
              >
                <FontAwesomeIcon icon={faArrowLeft} size="lg" />
              </button>
              <button
                title="Salva"
                form="updateForm"
                className="button is-primary is-outlined is-rounded is-small"
                type="submit"
              >
                <FontAwesomeIcon icon={faCheck} size="lg" />
              </button>
            </>
          )}
        </div>

        <div className="mb-3">
          {!this.state.onModify ? (
            <>
              {this.state.todo.description}
              <p>
                <FontAwesomeIcon icon={faCalendar} className="mx-2" />
                {this.state.todo.creationDate}
              </p>
            </>
          ) : (
            <form id="updateForm" onSubmit={this.handleUpdate}>
              <textarea
                title="Clicca per scrivere..."
                className="input-update textarea"
                type="text"
                placeholder="Clicca per scrivere..."
                onChange={this.handleChange}
                value={this.state.updateDescription}
              />
            </form>
          )}
        </div>
      </div>
    );
  }
}

export default Item;
