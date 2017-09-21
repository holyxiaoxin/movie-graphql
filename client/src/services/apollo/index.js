import {
  ApolloClient,
  createNetworkInterface,
} from 'react-apollo';

const networkInterface = createNetworkInterface({
  uri: 'http://localhost:3000/graphql',
  // connectToDevTools: true
  // transportBatching: true
});

export const apolloClient = new ApolloClient({
  networkInterface,
});

export default apolloClient;
