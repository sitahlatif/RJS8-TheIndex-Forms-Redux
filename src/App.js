import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";

// Components
import Sidebar from "./Sidebar";
import Loading from "./Loading";
import AuthorsList from "./AuthorsList";
import AuthorDetail from "./AuthorDetail";

import { connect } from "react-redux";

import * as actionCreators from "./store/actions/index";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authors: [], //remove this. We do not need it.
      loading: true
    };
  }

  componentDidMount() {
    this.props.fetchAllAuthors();
  }

  getView() {
    if (this.props.authors.id) {
      return <Loading />;
    } else {
      return (
        <Switch>
          <Redirect exact from="/" to="/authors" />
          <Route path="/authors/:authorID" component={AuthorDetail} />
          <Route path="/authors/" component={AuthorsList} />
          )} />
        </Switch>
      );
    }
  }

  render() {
    return (
      <div id="app" className="container-fluid">
        <div className="row">
          <div className="col-2">
            <Sidebar />
          </div>
          <div className="content col-10">{this.getView()}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authors: state.rootAuthors.authors
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAllAuthors: () => dispatch(actionCreators.fetchAuthors())
  };
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
