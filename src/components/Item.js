import React, { Component } from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: this.props.todo,
    };
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    if (this.state.todo.completed === false) {
      // In questo modo setto is completed usando setState (buona prassi)
      this.setState({
        todo: {
          ...this.state.todo,
          completed: true,
        },
      });
    } else {
      this.setState({
        todo: {
          ...this.state.todo,
          completed: false,
        },
      });
    }
  }

  render() {
    return (
      // Il toString perchè ho visto che dava errori la console
      <div
        toggle={this.state.todo.completed.toString()}
        className={
          this.state.todo.completed
            ? "notification is-primary is-light"
            : "notification is-warning is-light"
        }
        onDoubleClick={this.handleToggle}
      >
        <div className="buttons is-grouped is-right">
          {this.state.todo.completed ? (
            <h6 className="mr-5">
              <FontAwesomeIcon icon={faThumbsUp} className="mx-2" size="lg" />
              Completato!
            </h6>
          ) : (
            ""
          )}
          <button className="button is-primary is-outlined is-rounded is-small">
            <FontAwesomeIcon icon={faEdit} size="lg" />
          </button>

          <button className="button is-danger is-outlined is-rounded is-small">
            <FontAwesomeIcon icon={faTimes} size="lg" />
          </button>
        </div>

        <div className="mb-3">
          {this.state.todo.description}
          <p>
            <FontAwesomeIcon icon={faCalendar} className="mx-2" />
            {this.state.todo.creationDate}
          </p>
        </div>
      </div>
    );
  }
}

export default Item;
