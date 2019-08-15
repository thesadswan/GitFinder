import React, { Component } from "react";

export default class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
  }
  render() {
    const {
      name,
      avatar_url,
      location,
      bio,
      hireable,
      public_repos
    } = this.props.user;
    const { loading } = this.props;
    return (
      <div>
        <h2>{name}</h2>
        <h2>{avatar_url}</h2>
        <h2>{location}</h2>
        <h2>{bio}</h2>
        <h2>{hireable}</h2>
        <h2>{public_repos}</h2>
      </div>
    );
  }
}
