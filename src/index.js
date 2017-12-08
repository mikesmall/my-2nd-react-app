import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Post from './App.js';

var post = {
  title: "Dinosaurs Are Awesome",
  authors: [
    "Stealthy Stegasaurus",
    "Tiny T-Rex",
    "Ivory Iguanadon"
  ],
  body: "Thou misbegotten milk-livered bladder! You are as rheumatic as two dry toasts. Out of my sight! Thou dost infect my eyes. Thou fobbing unchin-snouted devil-mon! Thou cullionly spur-galled puttock! Thou pribbling rough-hewn horn-beast! Thou dankish onion-eyed clotpole! Thou dankish onion-eyed clotpole! Thou paunchy dread-bolted giglet! Thou currish common-kissing boar-pig! Thou churlish flap-mouthed fustilarian!",
  comments: [
    "First!",
    "Stega's wrong again!",
    "What is a clotpole?",
    "Great article! Love, Mom",
    "Dinosaurs are idiots, that's why they died"
  ]
}

ReactDOM.render(
  <Post
    title={post.title}
    allAuthors={post.authors}
    body={post.body}
    comments={post.comments}
  />,
document.getElementById('root'));

// * postBody populated by the 'lorem-insults' Atom package.
