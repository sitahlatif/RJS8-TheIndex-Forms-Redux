import React, { Component } from "react";

import { connect } from "react-redux";
import * as actionCreators from "./store/actions/index";

class BookForm extends Component {
  state = {
    title: "",
    color: ""
  };

  render() {
    return (
      <form>
        <input type="text" name="title" placeholder="Book Name" />
        <select name="color">
          <option value="">Color</option>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          <option value="yellow">Yellow</option>
          <option value="black">Black</option>
          <option value="white">White</option>
          <option value="grey">Grey</option>
          <option value="purple">Purple</option>
        </select>
        <input type="submit" value="Add Book" />
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    authors: state.rootAuthors.authors,
    author: state.rootAuthor.author
  };
};

const mapDispatchToProps = dispatch => {
  return {
    postBook: (book, authorID) =>
      dispatch(actionCreators.postBook(book, authorID))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookForm);
