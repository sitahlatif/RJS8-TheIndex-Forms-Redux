import React, { Component } from "react";
import { connect } from "react-redux";

import * as actionCreators from "./store/actions";

import BookForm from "./BookForm";
import Modal from "react-responsive-modal";

class AddBookModal extends Component {
  state = {
    open: false
  };

  onOpenModal = () => this.setState({ open: true });

  onCloseModal = () => this.setState({ open: false });

  render() {
    const { open } = this.state;
    return (
      <div>
        <Modal open={open} onClose={this.onCloseModal} center>
          <BookForm author={this.props.author} />
        </Modal>
        <input type="button" onClick={this.onOpenModal} value="Add New Book!" />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    resetErrors: () => dispatch(actionCreators.resetErrors())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(AddBookModal);
