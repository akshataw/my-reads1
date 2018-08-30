import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import BookShelf from './BookShelf';


export default class BookList extends React.Component{
  static propTypes ={
  books: PropTypes.arrayOf(PropTypes.shape({
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  shelf: PropTypes.string.isRequired,
  imageLinks: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired})),
  onShelfChange: PropTypes.func.isRequired
  }

    shelfs = [
      {
        name : 'currentlyReading',
        heading : 'Currently Reading'
      },
      {
        name : 'wantToRead',
        heading : 'Want to Read'
      },
      {
        name : 'read',
        heading : 'Read'
      },
  ]

  render(){
    const books = this.props.books
    const shelfs = this.shelfs
    return(
      <div className="books-list">
       <div className="app-title">
        <h1>My Reads</h1>
       </div>
       <div className="book-content">
        {shelfs.map((shelf, index) => (
          <BookShelf  title={shelf.heading} key={index}
          books={books.filter((book) => book.shelf === shelf.name)}
          onShelfChange={(id, shelf) => {this.props.onShelfChange(id, shelf)
          }} />
        )) }
       </div>
       <div className="search-link">
         <Link to="/search">Add Book</Link>
       </div>
      </div>
    )
  }
}
