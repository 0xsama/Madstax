import React, { Component } from "react";
import Loader from "react-loader-spinner";

import Post from "./Post";
import "./Posts.css";

class PostsList extends Component {
  constructor(props) {
    super(props);
    this.getAllPosts = this.getAllPosts.bind(this);
    this.getPostsByTag = this.getPostsByTag.bind(this);

    this.state = {
      posts: []
    };
  }

  getAllPosts(filter) {
    const url = "https://csb-7m36q0l5p0-zptmzcihpg.now.sh/posts";

    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({ posts: res });
      })
      .then()
      .then()
      .catch(error => alert(error));
  }

  getPostsByTag(tag) {
    const url = "https://csb-7m36q0l5p0-zptmzcihpg.now.sh/posts/tags/" + tag;

    fetch(url)
      .then(res => res.json())
      .then(res => this.setState({ posts: res }))
      .catch(error => alert(error));
  }

  componentDidMount() {
    this.getAllPosts();
  }

  componentDidUpdate(prevProps) {
    console.log("componentDidUpdate");
  }

  render() {
    return (
      <div className="posts-list">
        {this.state.posts.length < 1 ? (
          <div className="loader">
            <Loader type="ThreeDots" color="#e03131" height="100" width="100" />{" "}
          </div>
        ) : this.props.filter ? (
          this.state.posts
            .filter(e => e.tags.includes(this.props.filter))
            .map(post => (
              <Post
                post={post}
                key={post._id}
                setFilter={this.props.setFilter}
              />
            ))
        ) : (
          this.state.posts.map(post => (
            <Post post={post} key={post._id} setFilter={this.props.setFilter} />
          ))
        )}
      </div>
    );
  }
}

export default PostsList;
