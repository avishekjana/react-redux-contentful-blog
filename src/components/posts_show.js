import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import marked from 'marked';
import { Link } from 'react-router';

import { fetchPost } from '../actions/index';
import Asset from './asset';

class PostsShow extends Component {

  componentWillMount() {
    this.props.fetchPost(this.props.params.id);
  }
  renderMarkdown(content) {
    return {
      __html: marked(content, {sanitize: true})
    }
  }

  render() {
    const { post } = this.props;

    if (!post) {
      return <div>Loading...</div>;
    }

    return (
      <section className="banner style1 orient-left content-align-left image-position-right fullscreen onload-image-fade-in onload-content-fade-right">
        <div className="content">
          <h1>{post.fields.title}</h1>
          <div className="major" dangerouslySetInnerHTML={this.renderMarkdown(post.fields.description)} />
          <br />
          <Link to={"/"} className="button big wide">Back</Link>
        </div>
        <div className="image">
          <Asset assetId={post.fields.featuredImage.sys.id} />
        </div>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return { post: state.posts.post };
}

export default connect(mapStateToProps, { fetchPost })(PostsShow);
