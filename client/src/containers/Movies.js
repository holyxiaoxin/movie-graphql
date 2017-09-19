import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { gql, graphql } from 'react-apollo';

class Movies extends Component {
  static defaultProps = {
    data: {},
  }

  static propTypes = {
    data: PropTypes.shape({
      movies: PropTypes.array,
    }),
  }

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
`)(Movies);
