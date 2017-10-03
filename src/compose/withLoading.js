import React from 'react';
import { branch, renderComponent } from 'recompose';

const Loading = () => (
  <div>Loading</div>
);

const withLoading = branch(
  (props) => {
    return props.data.loading;
  },
  renderComponent(Loading),
);

export default withLoading;
