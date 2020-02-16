import React, { Component, Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { NavBar } from './components/layout/Navbar.component';
import { UserList } from './components/users/UserList.component';
import { GitHubUser } from './components/users/GitHubUser.component';
import { Search } from './components/users/Search.component';
import { Alert } from './components/layout/Alert.component';
import { About } from './components/pages/about.component';

import './App.css';

class App extends Component {
  state = {
    users: [],
    user: {},
    repos: [],
    loading: false,
    alert: null
  };

  // Search GitHub Users
  searchUsers = async txt => {
    this.setState({ loading: true });

    const res = await fetch(
      `https://api.github.com/search/users?q=${txt}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    const data = await res.json();
    this.setState({ users: data.items, loading: false });
  };

  // Get single GitHub User
  getUser = async username => {
    this.setState({ loading: true });

    const res = await fetch(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    const data = await res.json();
    this.setState({ user: data, loading: false });
    console.log(data);
  };

  // Get users repos
  getUserRepos = async username => {
    this.setState({ loading: true });

    const res = await fetch(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    const data = await res.json();
    this.setState({ repos: data, loading: false });
    console.log(data);
  };

  clearUsers = e => {
    this.setState({ users: [], loading: false });
  };

  setAlert = (msg, type) => {
    this.setState({ alert: { msg: msg, type: type } });

    //setTimeout(() => this.setState({ alert: null }), 5000);
  };

  clearAlert = () => {
    this.setState({ alert: null });
  };

  render() {
    const { users, user, repos, loading } = this.state;

    return (
      <BrowserRouter>
        <div className='App'>
          <NavBar />
          <div className='container'>
            <Alert alert={this.state.alert} />
            <Switch>
              <Route
                exact
                path='/'
                render={props => (
                  <Fragment>
                    <Search
                      searchUsers={this.searchUsers}
                      clearUsers={this.clearUsers}
                      showClear={users.length > 0 ? true : false}
                      setAlert={this.setAlert}
                      clearAlert={this.clearAlert}
                    />
                    <UserList loading={loading} github={this.state.users} />
                  </Fragment>
                )}
              />
              <Route exact path='/about' component={About} />
              <Route
                exact
                path='/user/:login'
                render={props => (
                  <GitHubUser
                    {...props}
                    getUser={this.getUser}
                    getUserRepos={this.getUserRepos}
                    user={user}
                    repos={repos}
                    loading={loading}
                  />
                )}
              />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
