import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./componets/Header";
import PostsList from "./componets/Posts/PostsList";
import AddPost from "./componets/Dashboard/AddPost";
import EditPost from "./componets/Dashboard/EditPost";
import Dashboard from "./componets/Dashboard/Dashboard";

import "normalize.css";
import "./styles.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: null
    };
    this.setFilter = this.setFilter.bind(this);
    this.removeFilter = this.removeFilter.bind(this);
  }

  setFilter(tag) {
    this.setState({ filter: tag });
  }

  removeFilter() {
    this.setState({ filter: null });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header removeFilter={this.removeFilter} />
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <PostsList
                  num="2"
                  filter={this.state.filter}
                  setFilter={this.setFilter}
                />
              )}
            />
            <Route path="/add-post" component={AddPost} />
            <Route path="/edit-post/:id" component={EditPost} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/tags" component={PostsList} />
          </Switch>
        </div>
      </Router>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
