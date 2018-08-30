import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import BookShelf from './BookShelf';
import * as BooksAPI from './BooksAPI';

export default class SearchBook extends React.Component{
  state = {
    books : [],
    query : ''
  }

  static propTypes = {
      myBooks: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        shelf: PropTypes.string.isRequired,
        imageLinks: PropTypes.object.isRequired,
        authors: PropTypes.arrayOf(PropTypes.string.isRequired),
        id: PropTypes.string.isRequired
      })),
      onShelfChange: PropTypes.func.isRequired
    }


  mergeArr = (arr,Arr) => {
     return arr.map((item)=>{
       Arr.forEach((Item)=>{
         if(Item.id === item.id){
           item.shelf = Item.shelf
           return
         }
       })
       return item
     })
   }

updateQuery = (event) => {
  const value = event.target.value.trim()
  this.setState({query: value})
  this.searchData(value)
}

searchData = (value) => {
  if(value.length !== 0) {
    BooksAPI.search(value, 10).then((books) => {
      if(books.length>0){
        books = books.filter((book) =>book.imageLinks)
         books = this.mergeArr(books,this.props.myBooks)
        this.setState({books})
      }
      else{
        this.setState({books: []})
      }
    })
}
  else if(value === undefined){
    this.setState({books: [], query: 'No Results Found'})
  }
  else{
    this.setState({books: [], query: ''})
  }
}

  render(){
    const books = this.state.books
    const query = this.state.query

    return(
      <div>
      <div className="search-books">
          <div className="search-books-bar">
            <Link className="close-search" to="/">Close</Link>
            <div className="search-input">
              <input type="text" id="txtbox1"
                placeholder="Search your book here..."
                value={query}
                onChange={this.updateQuery}
              />
            </div>
          </div>
          <div className="search-results">
            <ol className="books-grid"></ol>
          </div>
        </div>
        {this.state.query !== '' && books.length > 0 && (<BookShelf title="Search Results" books={books} onShelfChange={(id, shelf) => {
          this.props.onShelfChange(id, shelf)
        }} />)}
      </div>
    )
  }
}
