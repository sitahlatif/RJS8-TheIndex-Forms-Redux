import React, { Component } from "react";

import { connect } from "react-redux";

class BookForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      authors: [
        {
          name:
            this.props.author.first_name + " " + this.props.author.last_name,
          id: this.props.author.id
        }
      ],
      color: ""
    };
    this.onTextChange = this.onTextChange.bind(this);
    this.pushAuthorToForm = this.pushAuthorToForm.bind(this);
  }

  onTextChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  pushAuthorToForm(event) {}

  render() {
    return (
      <tr>
        <td>
          <input
            type="text"
            name="title"
            placeholder="Book Name"
            onChange={this.onTextChange}
          />
        </td>
        <td>
          <span>
            {this.props.author.first_name + " " + this.props.author.last_name}
          </span>
        </td>
        <td>
          <select name="color" onChange={this.onTextChange}>
            <option value="red">Red</option>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
            <option value="yellow">Yellow</option>
            <option value="black">Black</option>
            <option value="white">White</option>
            <option value="grey">Grey</option>
            <option value="purple">Purple</option>
          </select>
        </td>
      </tr>
    );
  }
}

const mapStateToProps = state => {
  return {
    authors: state.rootAuthors.authors,
    author: state.rootAuthor.author
  };
};

export default connect(mapStateToProps)(BookForm);
