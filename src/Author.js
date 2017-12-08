import React, {Component} from 'react';

class Author extends Component {
  render () {
    return (
      <div class="author">
        <p>Written by {this.props.author}</p>
      </div>
    )
  }

}

export default Author
