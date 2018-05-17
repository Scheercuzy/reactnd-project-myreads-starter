import React from 'react'
import * as BooksAPI from './BooksAPI'
import ListBooks from './ListBooks';
import SearchBooks from './SearchBooks';
import { Route } from 'react-router-dom'
import './App.css'

class BooksApp extends React.Component {

  constructor(props) {
    super(props);
    this.onShelfChange = this.onShelfChange.bind(this);

    this.state = {
      books: []
    }
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  onShelfChange(book, event) {
    let shelf = event.target.value

    BooksAPI.update(book, shelf).then(() => {
      this.setState(({ books }) => ({
        books: books.filter(b => b.id !== book.id).concat([
          Object.assign({}, book, { shelf })
        ])
      }));
    });
  }

  render() {
    return (
      <div className="app">
        <Route path='/' render={() => (
          <ListBooks books={this.state.books} onShelfChange={this.onShelfChange} />
        )}/>
        <Route path='/search' render={() => (
          <SearchBooks />
        )}/>
      </div>
    )
  }
}

export default BooksApp
