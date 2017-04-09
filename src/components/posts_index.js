import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextTruncate from 'react-text-truncate';
import { Link } from 'react-router';

import { fetchPosts } from '../actions/index';
import Asset from './asset';

class PostsIndex extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }
  renderPosts() {
    return this.props.posts.map((post, index) => {
      return (
        <section key={post.sys.id} className={`spotlight style1 orient-${index%2 ? 'right':'left'} content-align-left image-position-center onscroll-image-fade-in`}>
          <div className="content">
            <h2>{post.fields.title}</h2>
            <div className="major">
              <TextTruncate
                  line={4}
                  truncateText="…"
                  text={post.fields.description}
                  />
            </div>
            <br />
            <Link to={"posts/" + post.sys.id} className="button big wide smooth-scroll-middle">Learn more</Link>
          </div>
          <div className="image">
            <Asset assetId={post.fields.featuredImage.sys.id} />
          </div>
        </section>
      );
    });
  }
  render() {
    return (
      <div>
        {this.renderPosts()}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { posts: state.posts.all };
}
export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
