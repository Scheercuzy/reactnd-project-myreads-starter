import React from 'react';
import Book from './Book';
import PropTypes from 'prop-types';

class BookShelf extends React.Component {

  render() {

    const { title, onShelfChange, books } = this.props
  
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
          {books.map((book, index) => (
              <li key={index}>
                <Book
                  book={book}
                  onShelfChange={onShelfChange}
                />
              </li>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

BookShelf.propTypes = {
  title: PropTypes.string,
  onShelfChange: PropTypes.func,
  books: PropTypes.array
}

export default BookShelf;