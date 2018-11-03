import React, { Component } from "react";

// Components
import AddAuthorCard from "./AddAuthorCard";
import AuthorCard from "./AuthorCard";
import SearchBar from "./SearchBar";

import { connect } from "react-redux";

class AuthorsList extends Component {
  render() {
    const authorCards = this.props.filteredAuthors.map(author => (
      <AuthorCard key={author.first_name + author.last_name} author={author} />
    ));

    return (
      <div className="authors">
        <h3>Authors</h3>
        <SearchBar />
        <div className="row">
          <AddAuthorCard onClick={this.onOpenModal} /> {authorCards}
        </div>
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

export default connect(mapStateToProps)(AuthorsList);
