import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import TagsInput from "react-tagsinput";
import "react-tagsinput/react-tagsinput.css";

import "./Dashboard.css";

class EditPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      url: "",
      tags: [],
      thumbnail: "",
      fireRedirect: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleTags = this.handleTags.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.loadPost = this.loadPost.bind(this);
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleTags(tags) {
    this.setState({ tags });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (
      this.state.title === "" ||
      this.state.url === "" ||
      this.state.tags === "" ||
      this.state.thumbnail === "" ||
      this.state.thumbnail === "---"
    ) {
      alert("All fields are required!");
    } else {
      this.submitPost();
    }
  }
  loadPost(id) {
    const url = "https://csb-7m36q0l5p0-zptmzcihpg.now.sh/posts/" + id;

    fetch(url)
      .then(res => res.json())
      .then(res =>
        this.setState({
          title: res.title,
          url: res.url,
          tags: res.tags,
          thumbnail: res.thumbnail
        })
      )
      .catch(error => alert(error));
  }

  submitPost() {
    let id = this.props.location.pathname
      .split("/")
      .splice(2)
      .join();
    const url = "https://csb-7m36q0l5p0-zptmzcihpg.now.sh/posts/" + id;

    fetch(url, {
      method: "put",
      body: JSON.stringify({
        title: this.state.title,
        url: this.state.url,
        tags: this.state.tags.map(e => e.toLowerCase()).join(","),
        thumbnail: this.state.thumbnail
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(this.setState({ fireRedirect: true }))
      .catch(function(error) {
        alert("Request failed", error);
      });
  }

  componentDidMount() {
    let id = this.props.location.pathname
      .split("/")
      .splice(2)
      .join();
    this.loadPost(id);
  }

  render() {
    const { fireRedirect } = this.state;
    return (
      <div className="dashboard">
        <div className="post-form-container">
          <form className="post-form" onSubmit={this.handleSubmit}>
            <label>Title:</label>
            <input
              className="post-form-input"
              type="text"
              name="title"
              id="title"
              value={this.state.title}
              onChange={this.handleChange}
            />

            <label>URL:</label>
            <input
              className="post-form-input"
              type="text"
              name="url"
              id="url"
              value={this.state.url}
              onChange={this.handleChange}
            />

            <label>Tags:</label>
            <TagsInput
              value={this.state.tags}
              id="tags"
              onChange={this.handleTags}
            />

            <label>Thumbnail:</label>
            <select
              type="select"
              name="thumbnail"
              id="thumbnail"
              value={this.state.thumbnail}
              onChange={this.handleChange}
            >
              <option value="---">---</option>
              <option value="https://uploads.codesandbox.io/uploads/user/9fbd11f1-6b60-4273-b37c-94fa6f624a5e/meNH-javascript.png">
                JavaScript
              </option>
              <option value="https://uploads.codesandbox.io/uploads/user/9fbd11f1-6b60-4273-b37c-94fa6f624a5e/qyMJ-typescript.png">
                TypeScript
              </option>
              <option value="https://uploads.codesandbox.io/uploads/user/9fbd11f1-6b60-4273-b37c-94fa6f624a5e/0dB1-react.png">
                React
              </option>
              <option value="https://uploads.codesandbox.io/uploads/user/9fbd11f1-6b60-4273-b37c-94fa6f624a5e/xNpl-redux.png">
                Redux
              </option>
              <option value="https://uploads.codesandbox.io/uploads/user/9fbd11f1-6b60-4273-b37c-94fa6f624a5e/xqDT-nextjs.png">
                Next.js
              </option>
              <option value="https://uploads.codesandbox.io/uploads/user/9fbd11f1-6b60-4273-b37c-94fa6f624a5e/CqS8-preact.png">
                Preact
              </option>
              <option value="https://uploads.codesandbox.io/uploads/user/9fbd11f1-6b60-4273-b37c-94fa6f624a5e/9HEd-angular.png">
                Angular
              </option>
              <option value="https://uploads.codesandbox.io/uploads/user/9fbd11f1-6b60-4273-b37c-94fa6f624a5e/wzVY-vuejs.png">
                Vue.js
              </option>
              <option value="https://uploads.codesandbox.io/uploads/user/9fbd11f1-6b60-4273-b37c-94fa6f624a5e/Ny3g-aurelia.png">
                Aurelia
              </option>
              <option value="https://uploads.codesandbox.io/uploads/user/9fbd11f1-6b60-4273-b37c-94fa6f624a5e/ldBp-backbone.png">
                Backbone
              </option>
              <option value="https://uploads.codesandbox.io/uploads/user/9fbd11f1-6b60-4273-b37c-94fa6f624a5e/jHZl-ember.png">
                Ember
              </option>
              <option value="https://uploads.codesandbox.io/uploads/user/9fbd11f1-6b60-4273-b37c-94fa6f624a5e/UT0s-nodejs.png">
                Node.js
              </option>
              <option value="https://uploads.codesandbox.io/uploads/user/9fbd11f1-6b60-4273-b37c-94fa6f624a5e/Elir-express.png">
                Express
              </option>
              <option value="https://uploads.codesandbox.io/uploads/user/9fbd11f1-6b60-4273-b37c-94fa6f624a5e/cjrH-hapijs.png">
                Hapi.js
              </option>
              <option value="https://uploads.codesandbox.io/uploads/user/9fbd11f1-6b60-4273-b37c-94fa6f624a5e/WENi-koa.png">
                Koa
              </option>
              <option value="https://uploads.codesandbox.io/uploads/user/9fbd11f1-6b60-4273-b37c-94fa6f624a5e/bkro-rxjs.png">
                RxJs
              </option>
              <option value="https://uploads.codesandbox.io/uploads/user/9fbd11f1-6b60-4273-b37c-94fa6f624a5e/rJEn-webpack.png">
                Webpack
              </option>
              <option value="https://uploads.codesandbox.io/uploads/user/9fbd11f1-6b60-4273-b37c-94fa6f624a5e/MkrX-parceljs.png">
                Parcel.js
              </option>
              <option value="https://uploads.codesandbox.io/uploads/user/9fbd11f1-6b60-4273-b37c-94fa6f624a5e/T-uo-babel.png">
                Babel
              </option>
              <option value="https://uploads.codesandbox.io/uploads/user/9fbd11f1-6b60-4273-b37c-94fa6f624a5e/8vBI-mongodb.png">
                MongoDB
              </option>
            </select>

            <button className="update-button" type="submit">
              Update
            </button>
          </form>
          {fireRedirect && <Redirect to={"/dashboard"} />}
        </div>
      </div>
    );
  }
}

export default EditPost;
