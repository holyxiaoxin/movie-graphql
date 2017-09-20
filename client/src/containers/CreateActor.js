import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import { createActor } from '../queries/actor';

class CreateActor extends Component {
  handleSumbit = () => {
    console.log(this.name.value);
    console.log(this.bio.value);
    this.props
      .mutate({ variables: {
        name: this.name.value,
        bio: this.bio.value,
      } })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    this.name.value = '';
    this.bio.value = '';
  }

  render() {
    return (
      <div>
        <div>Create a Actor!</div>
        Name: <input ref={(r) => { this.name = r; }} />
        Bio: <input ref={(r) => { this.bio = r; }} />
        <button onClick={this.handleSumbit}>create</button>
      </div>
    );
  }
}

export default graphql(createActor)(CreateActor);
