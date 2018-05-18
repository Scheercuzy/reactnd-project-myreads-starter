import React from 'react';
import BookShelf from './BookShelf';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

class ListBooks extends React.Component {

	render() {
		const {books, onShelfChange} = this.props;

		let bookShelvesTitles = [
			{ currentlyReading: "Currently Reading" },
			{ wantToRead: "Want to Read"} ,
			{read: "Read"}
		];
		let bookShelvesBooks = []

		bookShelvesTitles.map((obj, index) => {
			return bookShelvesBooks[index] = books.filter(book => {
				return book.shelf === Object.keys(obj)[0]
			})
		})

		return (
			<div className="list-books">
				<div className="list-books-title">
					<h1>MyReads</h1>
				</div>
				<div className="list-books-content">
					<div>
						{bookShelvesTitles.map((obj, index) => (
								<BookShelf
									key={index}
									title={obj[Object.keys(obj)[0]]}
									books={bookShelvesBooks[index]}
									onShelfChange={onShelfChange}
								/>
							))
						}
					</div>
				</div>
				<div className="open-search">
					<Link to="/search" className="close-search">Add a book</Link>
				</div>
			</div>
		)
	}
}

ListBooks.propTypes = {
	books: PropTypes.array,
	onShelfChange: PropTypes.func
}

export default ListBooks;