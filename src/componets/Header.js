import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="logo">
          <Link to="/" onClick={this.props.removeFilter}>
            <img src="https://i.imgur.com/IJ63qf8.png" alt="logo" />
            <h1 className="logo"> Madstax</h1>
          </Link>
        </div>
        <div className="dashboard-link">
          <Link to="/dashboard">
            <i className="fas fa-edit" />
          </Link>
        </div>
      </div>
    );
  }
}

export default Header;
