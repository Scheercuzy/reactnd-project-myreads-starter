import React from 'react';
import PropTypes from 'prop-types';

class BookShelfChanger extends React.Component {

	render() {
		const {onShelfChange, book} = this.props;

		return (
			<div className="book-shelf-changer">
				<select defaultValue={book.shelf || "none"} onChange={event => onShelfChange(book, event)}>
					<option value="none" disabled>Move to...</option>
					<option value="currentlyReading">Currently Reading</option>
					<option value="wantToRead">Want to Read</option>
					<option value="read">Read</option>
					<option value="none">None</option>
				</select>
			</div>
		)
	}
}

BookShelfChanger.propTypes = {
	book: PropTypes.object,
	onShelfChange: PropTypes.func
  }

export default BookShelfChanger;