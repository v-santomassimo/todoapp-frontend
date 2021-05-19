import React, { Component } from "react";
import { Modal, Button } from "react-bulma-components";
import FormItem from "./FormItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

class ModalFormItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopup: false,
      fetchedItems: this.props.fetchedItems,
    };
    this.handleClose = () => this.setState({ showPopup: false });
    this.handleShow = () => this.setState({ showPopup: true });
  }
  render() {
    return (
      <>
        {/*Button che apre il popup per aggiungere To Dos*/}
        <button
          className="button is-primary is-rounded"
          value="Click to Open Popup"
          onClick={this.handleShow}
        >
          <FontAwesomeIcon icon={faPlus} className="mr-2" />
          Aggiungi
        </button>
        <Modal show={this.state.showPopup} onClose={this.handleClose}>
          <Modal.Card>
            <Modal.Card.Header>
              <Modal.Card.Title>Aggiungi To Do</Modal.Card.Title>
            </Modal.Card.Header>
            <Modal.Card.Body>
              <FormItem
                onSubmitClose={this.handleClose}
                items={this.props.fetchedItems}
              />
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
      </>
    );
  }
}

export default ModalFormItem;
