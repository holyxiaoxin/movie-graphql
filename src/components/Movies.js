import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class MoviesWithCusor extends Component {
  static defaultProps = {
    data: {},
  }

  static propTypes = {
    data: PropTypes.shape({
      movies: PropTypes.array,
    }),
  }

  render() {
    const { data, top_n: topN } = this.props;

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
                <div>Id {m.id}: {m.title}</div>
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
        {
          topN ?
            null :
            <div
              style={{ fontSize: 22, color: 'blueviolet', padding: 20, textAlign: 'center' }}
              onClick={data.loadMoreEntries}
            >
              Load more...
            </div>
        }
      </div>
    );
  }
}
