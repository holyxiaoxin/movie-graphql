import {
  ApolloClient,
  createNetworkInterface,
} from 'react-apollo';

const networkInterface = createNetworkInterface({
  uri: 'http://localhost:3000/graphql',
  // connectToDevTools: true
  // transportBatching: true
});

const authTokenMiddleware = {
  applyMiddleware: (req, next) => {
    if (!req.options.headers) {
      req.options.headers = {}; // Create the header object if needed.
    }

    const token = 'sample_auth_token';
    req.options.headers.Authorization = token ? `Bearer ${token}` : null;
    next();
  },
};

const errorsHandlingAfterware = {
  applyAfterware: ({ response }, next) => {
    if (response.status >= 200 && response.status < 300) {
      next();
    } else if (response.status === 401) {
      console.log('Unauthorized!');
      // Handle redirect to login page
      next();
    } else if (response.status === 500) {
      response.json()
        .then((json) => {
          console.log(json.errors);
          next();
        })
        .catch(() => {
          console.log('Something went wrong');
          next();
        });
    } else {
      console.log('Something went wrong');
      next();
    }
  }
};

networkInterface
  .use([authTokenMiddleware])
  .useAfter([errorsHandlingAfterware]);

export const apolloClient = new ApolloClient({
  networkInterface,
});

export default apolloClient;
