import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { gql, graphql } from 'react-apollo';

const mutation = gql`
mutation CreateMovie($title: String, $year: Int) {
  createMovie(title: $title, year: $year) {
    title
    year
  }
}
`;

class CreateMovie extends Component {
  handleSumbit = () => {
    console.log(this.title.value);
    console.log(this.year.value);
    this.props
      .mutate({ variables: {
        title: this.title.value,
        year: parseInt(this.year.value, 10),
      } })
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

export default graphql(mutation)(CreateMovie);
