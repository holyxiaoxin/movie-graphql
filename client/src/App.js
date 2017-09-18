import React, { Component } from 'react';
import { gql, graphql } from 'react-apollo';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const { data, loading } = this.props;
    if (loading) return null;

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          {JSON.stringify(data.movies)}
        </p>
      </div>
    );
  }
}

export default graphql(gql`
  query App {
    movies(year: 1981) {
      title
      year
      actors {
        name
      }
    }
  }
`)(App);;
