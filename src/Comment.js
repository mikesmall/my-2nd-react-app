import React, {Component} form 'react';

class Comment extends Component {
  render () {
    return (
      <div class="comment">
        <p>{this.props.body}</p>
      </div>
    )
  }
}

export default Comment
