import React, { Component, Fragment } from "react";
import Loader from "react-loader-spinner";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
    this.getAllPosts = this.getAllPosts.bind(this);
    this.editPost = this.editPost.bind(this);
    this.deletePost = this.deletePost.bind(this);
  }

  getAllPosts = () => {
    const url = "https://csb-7m36q0l5p0-zptmzcihpg.now.sh/posts";

    fetch(url)
      .then(res => res.json())
      .then(res => this.setState({ posts: res }))
      .catch(error => alert(error));
  };

  editPost = id => {
    this.props.history.push("edit-post/" + id);
  };

  deletePost = (id, title) => {
    const url = "https://csb-7m36q0l5p0-zptmzcihpg.now.sh/posts/" + id;

    fetch(url, {
      method: "delete"
    })
      .then(res => res.json())
      .then(res => console.log(res, id, title))
      .then(() => this.getAllPosts())
      .catch(error => alert(error));
  };

  componentDidMount() {
    this.getAllPosts();
  }

  render() {
    return (
      <Fragment>
        <div className="dashboard">
          <div className="dashboard-posts-list">
            <div className="dashboard-top-panel">
              <h3>Dashboard</h3>
              <Link to="/add-post">
                <button className="new-post-button">
                  <i class="fas fa-plus-square" /> New Post
                </button>
              </Link>
            </div>

            {this.state.posts.length < 1 ? (
              <div className="loader">
                <Loader
                  type="ThreeDots"
                  color="#e03131"
                  height="100"
                  width="100"
                />{" "}
              </div>
            ) : (
              this.state.posts.map(post => (
                <div className="edit-post" key={post._id}>
                  <img src={post.thumbnail} alt="thumbnail" title={post._id} />
                  <p>{post.title}</p>
                  <button
                    className="edit-button"
                    onClick={() => this.editPost(post._id)}
                  >
                    <i className="fas fa-edit" />
                  </button>
                  <button
                    className="delete-button"
                    onClick={() => this.deletePost(post._id, post.title)}
                  >
                    <i className="fas fa-trash-alt" />
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Dashboard;
