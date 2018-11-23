import React, { Component } from "react";

class Post extends Component {
  render() {
    return (
      <div>
        <div className="post">
          <div className="thumbnail">
            <img src={this.props.post.thumbnail} alt="thumbnail" />
          </div>
          <div className="postDetails">
            <a href={this.props.post.url} target="_blank">
              <h2>{this.props.post.title}</h2>
            </a>
            <div className="post-tags">
              <p>Tags: </p>
              {this.props.post.tags.map(tag => (
                <a onClick={() => this.props.setFilter(tag)} key={tag}>
                  {tag}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
