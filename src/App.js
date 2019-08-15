import React, { Component, Fragment } from "react";
import Navbar from "./Navbar";
import Users from "./Users";
import axios from "axios";
import Search from "./Search";
import "./App.css";
import Spinner from "./Spinner";
import Alert from "./Alert";
import About from "./About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
class App extends Component {
  state = {
    users: [],
    loading: true,
    alert: null
  };
  // componentDidMount() {
  //   axios
  //     .get("https://api.github.com/users")
  //     .then(res => console.log(res.data));
  // }
  async componentDidMount() {
    //console.log(process.env.REACT_APP_GITHUB_CLIENT_SECRET);
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/users?client_id=$
        {process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=$
        {process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    this.setState({ users: res.data, loading: false });
    //console.log(res.data);
  }
  searchUsers = async text => {
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=$
        {process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=$
        {process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ users: res.data.items, loading: false });
  };
  //clear users
  clearUsers = () => {
    this.setState({ users: [], loading: false });
  };
  //set Alert
  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } });
    setTimeout(() => this.setState({ alert: null }), 6000);
  };
  render() {
    const { users, loading } = this.state;
    return (
      <Router>
        <div className="App">
          <Navbar title="Github Finder" icon="fa fa-github" />
          <div className="container">
            <Alert alert={this.state.alert} />
            <Switch>
              <Route
                exact
                path="/"
                render={props => (
                  <Fragment>
                    <Search
                      searchUsers={this.searchUsers}
                      clearUsers={this.clearUsers}
                      setAlert={this.setAlert}
                      showClear={users.length > 0 ? true : false}
                    />
                    <Users loading={loading} users={users} />
                  </Fragment>
                )}
              />
              <Route exact path="/about" component={About} />
            </Switch>
            <Spinner />
          </div>
        </div>
      </Router>
    );
  }
}
export default App;
