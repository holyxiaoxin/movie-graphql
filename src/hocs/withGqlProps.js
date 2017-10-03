import React from 'react';
import _ from 'lodash';
import { compose } from 'recompose';
import { graphql } from 'react-apollo';

const withGqlPropsHOC = (gqlDefault, { enhancers, gqlConfig }) => Comp => (props) => {
  const { gql = gqlDefault } = props;
  // preppedEnhancers takes care of undefined, single parameter, array of enhancers
  const preppedEnhancers = _.compact(Array.isArray(enhancers) ? enhancers : [enhancers]);
  const EnhancedComp = compose(graphql(gql, gqlConfig), ...preppedEnhancers)(Comp);

  return React.createElement(EnhancedComp, props);
};

export default withGqlPropsHOC;
