import React, { Component } from 'react';
// import logo from './logo.svg';
// (the above line seems unnecessary)
import './App.css';
import Comment from './Comment.js';
import Author from './Author.js';

// Lesson Note:
// Normally, it would be good practice to rename the App.js file Post.js or to create a new component file for the Post component entirely. Then it would be obvious which component each file contains. However, don't do this! This is a comment for you to know best practices for the future - in this tutorial, leave the file named App.js. We're just concentrating on making it work for now!

class Post extends Component {

  constructor (props) {
    super()
    this.state = {
      // body will = whatever body prop was passed to the component:
      body: props.body
    }
  }
  // - Reminder: 'body' is a Post attribute. This isn't talking about HTML page <body>.
  // - The changeBody() method is called when the 'Edit Body' button is clicked by the user.
  // - Never use 'prompt' in production. Users hate popups.
  changeBody(e) {
    let newBody = prompt("What should the new body be?")
    this.setState({
      body: newBody
    })
  }

  handleFormInput (e) {
    console.log(e);
    this.setState({
      body: e.target.value
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
      // <Author author={this.props.allAuthors[0]} />,
      // <Author author={this.props.allAuthors[1]} />,
      <Author author={this.props.allAuthors[2]} />
    ]
    return (
      <div class="post">
        <h1>{this.props.title}</h1>
        <h2>{authors}</h2>
        <p>{this.state.body}</p>
        <button onClick={(e) => this.changeBody(e)}>Edit Body</button>
        <p>input: <input type="text" onChange={(e) => this.handleFormInput(e)} /></p>
        <div class="comments">
          <h3>Anonymous Comments (Do Not Read)</h3>
          <ol>{allComments}</ol>
        </div>
      </div>

    );
  }
}

export default Post;
