import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Search extends Component {
  state = {
    text: ""
  };
  onChange = e => {
    this.setState({ text: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault(); //یعنی نزار بعد از زدن دکمه صفحه رفرش بشه
    // console.log(this.state.text);
    if (this.state.text === "") {
      this.props.setAlert("Please enter a word", "light");
    } else {
      this.props.searchUsers(this.state.text);
      this.setState({ text: "" });
    }
  };
  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showUsers: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired
  };
  render() {
    const { showUsers, clearUsers } = this.props;
    return (
      <div>
        <form onSubmit={this.onSubmit} className="form">
          <input
            type="text"
            name="text"
            placeholder="Search Users.Component..."
            value={this.state.text}
            onChange={this.onChange}
          />
          <input
            type="submit"
            value="search"
            className="btn btn-dark btn-block"
          />
        </form>
        {showUsers && (
          <button className="btn btn-light btn-block" onClick={clearUsers}>
            Clear
          </button>
        )}
      </div>
    );
  }
}
