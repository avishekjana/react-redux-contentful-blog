import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchPosts } from '../actions/index';

class PostsIndex extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }
  render() {
    return <div> Our blog posts will come here.</div>;
  }
}
export default connect(null, { fetchPosts })(PostsIndex);
