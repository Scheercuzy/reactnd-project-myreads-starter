import React from 'react';
import BookShelfChanger from './BookShelfChanger';
import PropTypes from 'prop-types';

class Book extends React.Component {

	render() {
		const {book, onShelfChange} = this.props;

		if (!book.imageLinks) {
			book.imageLinks = {'thumbnail': 'http://www.jameshmayfield.com/wp-content/uploads/2015/03/defbookcover-min.jpg'}
		}

		if (!book.title) {
			book.title = 'Unknown Title'
		}

		if (!book.authors) {
			book.authors = ['Unknown Author']
		}

		return (
			<div className="book">
				<div className="book-top">
					<div 
						className="book-cover"
						style={{ backgroundImage: `url("${book.imageLinks.thumbnail}")` }}
					>
					</div>
					<BookShelfChanger book={book} onShelfChange={onShelfChange} />
				</div>
				<div className="book-title">{book.title}</div>
				<div className="book-authors">{book.authors.join(', ')}</div>
			</div>
		)
	}
}

Book.propTypes = {
	book: PropTypes.object,
	onShelfChange: PropTypes.func
}

export default Book;