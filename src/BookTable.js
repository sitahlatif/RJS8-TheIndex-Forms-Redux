import React, { Component } from "react";

import BookRow from "./BookRow";
import BookForm from "./BookForm";

class BookTable extends Component {
  render() {
    const bookRows = this.props.books.map(book => (
      <BookRow key={book.title} book={book} />
    ));
    return (
      <form>
        <table className="mt-3 table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Authors</th>
              <th>Color</th>
            </tr>
          </thead>
          <tbody>
            {bookRows}
            <BookForm />
          </tbody>
        </table>
        <input type="submit" value="Add Book" />
      </form>
    );
  }
}

export default BookTable;
