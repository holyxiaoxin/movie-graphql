export const fetchMoreWithCursor = (data, topic) =>
  () => {
    const lastCursor = data[topic][data[topic].length - 1];
    const lastCursorId = (lastCursor ? lastCursor.id : 0).toString();

    data.fetchMore({
      variables: { cursor: lastCursorId },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        console.log('updateQuery');
        if (!fetchMoreResult) { return previousResult; }
        return Object.assign({}, previousResult, {
          [topic]: [...previousResult[topic], ...fetchMoreResult[topic]],
        });
      },
    });
  };

export const fetchMoreWithOffset = (data, topic) =>
  () => {
    data.fetchMore({
      variables: { offset: data[topic].length },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        console.log('updateQuery');
        if (!fetchMoreResult) { return previousResult; }
        return Object.assign({}, previousResult, {
          // Append the new movies results to the old one
          movies: [...previousResult[topic], ...fetchMoreResult[topic]],
        });
      },
    });
  };
