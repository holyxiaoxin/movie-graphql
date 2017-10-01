import { gql } from 'react-apollo';

export const moviesQuery = gql`
  query MoviesQuery {
    movies {
      id
      title
      year
      actors {
        name
      }
    }
  }
`;

export const moviesQueryOffset = gql`
  query MoviesQueryOffset($offset: Int!, $limit: Int!) {
    movies: movies_offset(offset: $offset, limit: $limit) {
      id
      title
      year
      actors {
        name
      }
    }
  }
`;

export const moviesQueryCursor = gql`
  query MoviesQueryCursor($cursor: String!, $limit: Int!) {
    movies: movies_cursor(cursor: $cursor, limit: $limit) {
      id
      title
      year
      actors {
        name
      }
    }
  }
`;

export const topNMoviesQuery = gql`
  query TopNMoviesQuery($top_n: Int) {
    movies: top_n_movies(top_n: $top_n) {
      id
      title
      year
      actors {
        name
      }
    }
  }
`;

export const createMovie = gql`
  mutation CreateMovie($title: String, $year: Int) {
    createMovie(title: $title, year: $year) {
      id
      title
      year
    }
  }
`;
