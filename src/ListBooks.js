import React from 'react';
import BookShelf from './BookShelf';
import PropTypes from 'prop-types';

class ListBooks extends React.Component {

  render() {
    const {title, books} = this.props;

    const bookShelvesTitles = ['currentlyReading', 'wantToRead', 'read']
    let bookShelvesBooks = []

    bookShelvesTitles.map((title, index) => {
      return bookShelvesBooks[index] = books.filter(book => {
        return book.shelf === title
      })
    })

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>{title}</h1>
        </div>
        <div className="list-books-content">
          <div>
             {bookShelvesTitles.map((title, index) => (
                <BookShelf
                  key={index}
                  title={title}
                  books={bookShelvesBooks[index]}
                />
              ))
             }
          </div>
        </div>
        <div className="open-search">
          <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
        </div>
      </div>
    )
  }
}

ListBooks.propTypes = {
  title: PropTypes.string,
  books: PropTypes.array
}

export default ListBooks;