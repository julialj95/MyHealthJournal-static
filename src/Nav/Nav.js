import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

class Nav extends React.Component {
  renderLoggedIn() {
    return (
      <>
        <li className="navlink">
          <Link to="/submit-log">Submit Log</Link>
        </li>
        <li className="navlink">
          <Link to="/logs">View Logs</Link>
        </li>
        <li>
          <button className="logout_btn">Log Out</button>
        </li>
      </>
    );
  }

  renderLoggedOut() {
    return (
      <>
        <li className="navlink">
          <Link to="signup">Create Account</Link>
        </li>
        <li className="navlink">
          <Link to="login">Log In</Link>
        </li>
      </>
    );
  }
  handleLogoutClick = () => {};
  render() {
    return (
      <nav className="nav">
        <ul className="navbar">
          <li className="navlink">
            <Link to="/">Home</Link>
          </li>
          {this.props.loggedIn ? this.renderLoggedIn() : this.renderLoggedOut()}
        </ul>
      </nav>
    );
  }
}

export default Nav;