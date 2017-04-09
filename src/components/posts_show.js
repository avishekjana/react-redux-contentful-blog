import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import marked from 'marked';

import { fetchPost } from '../actions/index';

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
      <div>
        <section id="wrapper">
          <header>
            <div className="inner">
              <h2>{post.fields.title}</h2>
            </div>
          </header>
          <div className="wrapper">
            <div className="inner" dangerouslySetInnerHTML={this.renderMarkdown(post.fields.description)} />
          </div>
        </section>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { post: state.posts.post };
}

export default connect(mapStateToProps, { fetchPost })(PostsShow);
