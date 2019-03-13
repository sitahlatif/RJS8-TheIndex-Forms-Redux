import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "./store/actions/index";

class BookForm extends Component {
  state = {
    title: "",
    color: ""
  };
  textChangeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitBook = event => {
    event.preventDefault();
    this.props.postBook(this.state, this.props.author, this.props.closeModal);
  };

  render() {
    let colors = [
      "blue",
      "red",
      "orange",
      "green",
      "yellow",
      "white",
      "black"
    ].map(color => <option value={color}>{color}</option>);
    const errors = this.props.errors;
    return (
      <div className="mt-5 p-2">
        <form onSubmit={this.submitBook}>
          {!!errors.length && (
            <div className="alert alert-danger" role="alert">
              {errors.map(error => (
                <p key={error}>{error}</p>
              ))}
            </div>
          )}
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Title</span>
            </div>
            <input
              type="text"
              className="form-control"
              name="title"
              value={this.state.title}
              onChange={this.textChangeHandler}
            />
          </div>
          <div>
            <select name="color" onChange={this.textChangeHandler}>
              {colors}
            </select>
          </div>

          <input type="submit" />
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    author: state.rootAuthor.author,
    errors: state.rootErrors.errors
  };
};
const mapDispatchToProps = dispatch => {
  return {
    postBook: (newbook, author, closeModal) =>
      dispatch(actionCreators.postBook(newbook, author, closeModal)),
    resetErrors: () => dispatch(actionCreators.resetErrors())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookForm);
