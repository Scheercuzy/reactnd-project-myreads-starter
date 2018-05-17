import React from 'react';
import BookShelfChanger from './BookShelfChanger';

class Book extends React.Component {

  render() {
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: this.props.width, height: this.props.height, backgroundImage: this.props.image }}></div>
          <BookShelfChanger />
        </div>
        <div className="book-title">{this.props.title}</div>
        <div className="book-authors">{this.props.author}</div>
      </div>
    )
  }
}

export default Book;