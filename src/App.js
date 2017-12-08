import React, { Component } from 'react';
// import logo from './logo.svg';
// (the above line seems unnecessary)
import './App.css';
import Comment from './Comment.js';

// Note: Normally, it would be good practice to rename the App.js file Post.js or to create a new component file for the Post component entirely. Then it would be obvious which component each file contains. However, don't do this! This is a comment for you to know best practices for the future - in this tutorial, leave the file named App.js. We're just concentrating on making it work for now!

class Post extends Component {
  render() {
    return (
      <div class="post">
        <h1>{this.props.title}</h1>
        <h2>By: {this.props.author}</h2>
        <p>{this.props.body}</p>
        <h3>Comments:</h3>
        <Comment body={this.props.comments} />
      </div>

    );
  }
}

export default Post;
