import Movies from '../components/Movies';
import withLoading from '../compose/withLoading';
import { moviesQuery } from '../queries/movies';
import { fetchMoreWithCursor } from '../services/apollo/fetchMore';
import withGqlProps from '../hocs/withGqlProps';

const ITEMS_PER_PAGE = 5;
const gqlConfig = {
  options: props =>
    ({
      variables: {
        top_n: props.top_n,
        cursor: '0',
        limit: props.limit || ITEMS_PER_PAGE,
      },
      // fetchPolicy: 'network-only',
    }),
  props: ({ data }) =>
    ({
      data: {
        ...data,
        loadMoreEntries: fetchMoreWithCursor(data, 'movies')
      }
    }),
};

// const MoviesWithCusorWrapper = (props) => {
//   const { gql = moviesQuery } = props;
//   const Comp = compose(graphql(gql, gqlConfig), withLoading)(Movies);
//
//   return React.createElement(Comp, props);
// };

export default
withGqlProps(moviesQuery, { enhancers: [withLoading], gqlConfig })(Movies);
