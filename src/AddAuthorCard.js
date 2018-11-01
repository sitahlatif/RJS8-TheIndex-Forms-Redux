import React, { Component } from "react";
import { Link } from "react-router-dom";

class AddAuthorCard extends Component {
  render() {
    return (
      <div className="col-lg-4 col-md-6 col-12">
        <Link to="" className="card">
          <div className="image">
            <img
              className="card-img-top img-fluid"
              src="https://mbtskoudsalg.com/images/a-plus-png-2.png"
              alt="+"
            />
          </div>
          <div className="card-body">
            <h5 className="card-title">
              <span>Add Author</span>
            </h5>
            <small className="card-text"> books</small>
          </div>
        </Link>
      </div>
    );
  }
}

export default AddAuthorCard;
