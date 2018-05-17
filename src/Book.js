import React from 'react';
import BookShelfChanger from './BookShelfChanger';
import PropTypes from 'prop-types';

class Book extends React.Component {

  render() {
    const {title, authors, imageLinks} = this.props;

    return (
      <div className="book">
        <div className="book-top">
          <div 
            className="book-cover"
            style={{ backgroundImage: `url("${imageLinks.thumbnail}")` }}
          >
          </div>
          <BookShelfChanger />
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">{authors.join(', ')}</div>
      </div>
    )
  }
}

Book.propTypes = {
  title: PropTypes.string,
  authors: PropTypes.array,
  imageLinks: PropTypes.string
}

export default Book;