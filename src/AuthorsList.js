import React, { Component } from "react";

// Components
import AuthorCard from "./AuthorCard";
import SearchBar from "./SearchBar";

import { connect } from "react-redux";
import * as actionCreators from "./store/actions/index";

class AuthorsList extends Component {
  componentDidMount() {
    this.props.fetchAllAuthors();
  }

  render() {
    const authorCards = this.props.filteredAuthors.map(author => (
      <AuthorCard key={author.first_name + author.last_name} author={author} />
    ));

    return (
      <div className="authors">
        <h3>Authors</h3>
        <SearchBar />
        <div className="row">{authorCards}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authors: state.rootAuthors.authors,
    filteredAuthors: state.rootAuthors.filteredAuthors
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAllAuthors: () => dispatch(actionCreators.fetchAuthors())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthorsList);
