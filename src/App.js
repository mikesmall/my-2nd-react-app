import React, { Component } from 'react';
// import logo from './logo.svg';
// (the above line seems unnecessary)
import './App.css';
import Comment from './Comment.js';
import Author from './Author.js';

// Note: Normally, it would be good practice to rename the App.js file Post.js or to create a new component file for the Post component entirely. Then it would be obvious which component each file contains. However, don't do this! This is a comment for you to know best practices for the future - in this tutorial, leave the file named App.js. We're just concentrating on making it work for now!

class Post extends Component {

  constructor (props) {
    super()
    this.state = {
      body: props.body
    }
  }
  changeBody(e) {
    let newBody = prompt("What should the new body be?")
    this.setState({
      body: newBody
    })
  }

  render() {
    let allComments = [
      <Comment body={this.props.comments[0]} />,
      <Comment body={this.props.comments[1]} />,
      <Comment body={this.props.comments[2]} />,
      <Comment body={this.props.comments[3]} />,
      <Comment body={this.props.comments[4]} />
    ]
    let authors = [
      <Author author={this.props.allAuthors[0]} />,
      <Author author={this.props.allAuthors[1]} />,
      <Author author={this.props.allAuthors[2]} />
    ]
    return (
      <div class="post">
        <h1>{this.props.title}</h1>
        <h2>{authors}</h2>
        <p>{this.state.body}</p>
        <button onClick={(e) => this.changeBody(e)}>Edit Body</button>
        <div class="comments">
          <h3>Comments:</h3>
          <p>{allComments}</p>
        </div>
      </div>

    );
  }
}

export default Post;
