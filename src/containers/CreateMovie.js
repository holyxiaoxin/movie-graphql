import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import { createMovie, topNMoviesQuery, moviesQueryCursor } from '../queries/movies';

class CreateMovie extends Component {
  handleSumbit = () => {
    const { mutate } = this.props;
    mutate({
      variables: {
        title: this.title.value,
        year: parseInt(this.year.value, 10),
      },
      update: (store, { data: { createMovie: commit } }) => {
        const queries = [
          {
            query: topNMoviesQuery,
            variables: { top_n: 3 },
          },
          {
            query: moviesQueryCursor,
            variables: { limit: 5 },
          },
        ];

        queries.forEach(({ query, variables }) => {
          try {
            const data = store.readQuery({ query, variables });
            data.movies.unshift(commit);
            store.writeQuery({ query, variables, data });
          } catch (e) {
            // query does not exist in ROOT_QUERY yet
          }
        });
      },
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
    console.log(this.props.gql);
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
