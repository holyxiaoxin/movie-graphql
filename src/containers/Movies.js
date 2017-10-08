import Movies from '../components/Movies';
import withLoading from '../compose/withLoading';
import { fetchMoreWithOffset } from '../services/apollo/fetchMore';
import { moviesQuery } from '../queries/movies';
import withGqlProps from '../hocs/withGqlProps';

const ITEMS_PER_PAGE = 5;
const gqlConfig = {
  options: oProps =>
    ({
      variables: {
        top_n: oProps.top_n,
        offset: 0,
        limit: ITEMS_PER_PAGE,
      },
      // fetchPolicy: 'network-only',
    }),
  props: ({ data }) =>
    ({
      data: {
        ...data,
        loadMoreEntries: fetchMoreWithOffset(data, 'movies'),
      }
    }),
};

export default
withGqlProps(moviesQuery, { enhancers: [withLoading], gqlConfig })(Movies);
