import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import { moviesQuery, createMovie } from '../queries/movies';

class CreateMovie extends Component {
  handleSumbit = () => {
    console.log(this.title.value);
    console.log(this.year.value);
    this.props
      .mutate({
        variables: {
          title: this.title.value,
          year: parseInt(this.year.value, 10),
        },
        refetchQueries: [{
          query: moviesQuery,
        }],
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    this.title.value = '';
    this.year.value = '';
  }

  render() {
    return (
      <div>
        <div>Create a Movie!</div>
        Title: <input ref={(r) => { this.title = r; }} />
        Year: <input ref={(r) => { this.year = r; }} />
        <button onClick={this.handleSumbit}>create</button>
      </div>
    );
  }
}

export default graphql(createMovie)(CreateMovie);
