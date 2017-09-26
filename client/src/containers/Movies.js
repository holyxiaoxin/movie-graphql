import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import { moviesQuery } from '../queries/movies';

class Movies extends Component {
  static defaultProps = {
    data: {},
  }

  // static propTypes = {
  //   data: PropTypes.shape({
  //     movies: PropTypes.array,
  //   }),
  // }

  render() {
    const { data } = this.props;
    if (data.loading) return null;

    // {"title":"Indiana Jones","year":1981,
    // "actors":[{"name":"Harrison Ford","__typename":"Actor"}],"__typename":"Movie"}
    return (
      <div>
        {
          data.movies.map((m, i) => {
            return (
              <div
                key={i}
                style={{
                  textAlign: 'left',
                  border: 'solid 2px darkblue',
                  borderRadius: 10,
                  margin: 10,
                  padding: 12,
                }}
              >
                <div>Title: {m.title}</div>
                <div>Year: {m.year}</div>
                <div>Actors:
                  {
                    m.actors.map((a, j) => {
                      return (
                        <div key={j} style={{ paddingLeft: 10 }}>
                          Name: {a.name}
                        </div>
                      );
                    })
                  }
                </div>
              </div>
            );
          })
        }
        <div
          style={{ fontSize: 22, color: 'blueviolet', padding: 20, textAlign: 'center' }}
          onClick={data.loadMoreEntries}
        >
          Load more...
        </div>
      </div>
    );
  }
}

const ITEMS_PER_PAGE = 5;
const MoviesHOC = (props) => {
  const { gql = moviesQuery } = props;
  const gqlObj = [gql, {
    options(oProps) {
      return {
        variables: {
          top_n: oProps.top_n,
          offset: 0,
          limit: ITEMS_PER_PAGE,
        },
        fetchPolicy: 'network-only',
      };
    },
    props({ data }) {
      return {
        data: {
          ...data,
          loading: data.loading,
          movies: data.movies,
          loadMoreEntries() {
            return data.fetchMore({
              // query: ... (you can specify a different query. FEED_QUERY is used by default)
              variables: {
                // We are able to figure out which offset to use because it matches
                // the movies length, but we could also use state, or the previous
                // variables to calculate this (see the cursor example below)
                offset: data.movies.length,
              },
              updateQuery: (previousResult, { fetchMoreResult }) => {
                console.log('updateQuery');
                if (!fetchMoreResult) { return previousResult; }
                return Object.assign({}, previousResult, {
                  // Append the new movies results to the old one
                  movies: [...previousResult.movies, ...fetchMoreResult.movies],
                });
              },
            });
          },
        }
      };
    },

  }];

  const Comp = graphql(...gqlObj)(Movies);

  return <Comp {...props} />;
};

export default MoviesHOC;
