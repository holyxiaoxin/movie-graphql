import { gql } from 'react-apollo';

export const createActor = gql`
  mutation CreateActor($name: String, $bio: String) {
    createActor(name: $name, bio: $bio) {
      id
      name
      bio
    }
  }
`;
