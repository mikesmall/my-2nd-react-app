import React, {Component} from 'react';

class Comment extends Component {
  render () {
    return (
      <div class="comment">
        <li>{this.props.body}</li>
      </div>
    )
  }
}

export default Comment
