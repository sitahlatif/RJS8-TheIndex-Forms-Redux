import React, { Component } from "react";
import { connect } from "react-redux";

import * as actionCreators from "./store/actions/index";

class AuthorForm extends Component {
  state = {
    first_name: "",
    last_name: "",
    imageUrl: "",
    books: [] //leave this empty
  };

  submitAuthor = () => this.props.postAuthor(this.state);

  render() {
    return (
      <form onSubmit={this.submitAuthor}>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">First Name</span>
          </div>
          <input type="text" className="form-control" name="first_name" />
        </div>

        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">Last Name</span>
          </div>
          <input type="text" className="form-control" name="last_name" />
        </div>

        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">Image URL</span>
          </div>
          <input type="text" className="form-control" name="imageUrl" />
        </div>
        <input type="submit" />
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    postAuthor: newAuthor => dispatch(actionCreators.postAuthor(newAuthor))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(AuthorForm);
