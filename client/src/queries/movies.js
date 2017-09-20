import { gql } from 'react-apollo';

export const moviesQuery = gql`
  query App {
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

export const createMovie = gql`
  mutation CreateMovie($title: String, $year: Int) {
    createMovie(title: $title, year: $year) {
      id
      title
      year
    }
  }
`;
