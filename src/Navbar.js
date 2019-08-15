import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
/*export default class Navbar extends Component {
  static defaultProps = {
    title: "Github Profile Finder",
    icon: "fa fa-user"
  };
  //نوع پراپ ها را مشخص  می کنیم
  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
  };
  render() {
    return (
      <div className="navbar bg-primary">
        <h2>
          <i className={this.props.icon}>{this.props.title}</i>
        </h2>
      </div>
    );
  }
}
*/
const Navbar = props => {
  return (
    <div className="navbar bg-primary">
      <h2>
        <i className={props.icon}>{props.title}</i>
      </h2>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  );
};
//نوع پراپ ها را مشخص  می کنیم

Navbar.defaultProps = {
  title: "Github Profile Finder",
  icon: "fa fa-user"
};
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default Navbar;
