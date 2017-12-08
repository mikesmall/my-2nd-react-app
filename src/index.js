import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Post from './App.js';

var post = {
  postTitle: "Dinosaurs Are Awesome",
  postAuthor: "Stealthy Stegasaurus",
  postBody: "Thou misbegotten milk-livered bladder! You are as rheumatic as two dry toasts. Out of my sight! Thou dost infect my eyes. Thou fobbing unchin-snouted devil-mon! Thou cullionly spur-galled puttock! Thou pribbling rough-hewn horn-beast! Thou dankish onion-eyed clotpole! Thou dankish onion-eyed clotpole! Thou paunchy dread-bolted giglet! Thou currish common-kissing boar-pig! Thou churlish flap-mouthed fustilarian!",
  postComments: [
    "First comment!",
    "Second comment!",
    "Third comment!",
    "Fourth comment!",
    "Fifth comment!"
  ]
}

ReactDOM.render(
  <Post
    title={post.postTitle}
    author={post.postAuthor}
    body={post.postBody}
    comments={post.postComments}
  />,
document.getElementById('root'));

// * postBody populated by the 'lorem-insults' Atom package.
