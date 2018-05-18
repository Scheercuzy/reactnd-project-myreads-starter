import React from 'react';
import { Link } from 'react-router-dom';
import { search as searchapi } from './BooksAPI';
import Book from './Book';
import PropTypes from 'prop-types';

class SearchBooks extends React.Component {

	constructor(props) {
		super(props)
		this.searchHandler = this.searchHandler.bind(this)

		this.state = {
			query: "",
			searchResult: []
		}
	}

	searchHandler({ target }) {
		const query = target.value
	
		searchapi(query).then((result) => {
			if (!result.error) {
				this.setState({ searchResult: result })
			} else {
				this.setState({ searchResult: [] })
			}
		}).catch(error => 
			{this.setState({ searchResult: [] })
		})
	}

	render() {
		const { searchResult } = this.state
		const { onShelfChange } = this.props

		return (
		<div className="search-books">
			<div className="search-books-bar">
			<Link to="/" className="close-search">Close</Link>
			<div className="search-books-input-wrapper">
				{/*
				NOTES: The search from BooksAPI is limited to a particular set of search terms.
				You can find these search terms here:
				https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
				However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
				you don't find a specific author or title. Every search is limited by search terms.
			*/}
				<input type="text" placeholder="Search by title or author" onChange={this.searchHandler}/>

			</div>
			</div>
			<div className="search-books-results">
			<ol className="books-grid">
				{searchResult.map(book => (
				<li key={book.id}>
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

SearchBooks.propTypes = {
	books: PropTypes.array,
	onShelfChange: PropTypes.func
}

export default SearchBooks;