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

export const topNMoviesQuery = gql`
  query IndexView($top_n: Int) {
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
