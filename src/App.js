import React, { Component } from 'react';
import './App.css';
import SearchBook from './SearchBook';
import BookList from './BookList';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI'

export default class App extends Component {
  state = {
    books : []
  }

componentDidMount(){
  this.fetchBooks()
}

  fetchBooks = () => {
    BooksAPI.getAll().then((books) => this.setState({books}))
  }

changeShelf = (id, shelf) => {
  BooksAPI.update({id}, shelf).then((books) => {this.fetchBooks()
  })
}

  render() {
    return (
      <div className="app">
      <Router>
       <div>
        <Route exact path="/search" render={({history}) => (
          <SearchBook myBooks={this.state.books} onShelfChange={(id, shelf) => {this.changeShelf(id, shelf)
          history.push('/')
        }} />
        )} />
        <Route exact path="/" render={() => (
          <BookList books={this.state.books} onShelfChange={(id, shelf) => {this.changeShelf(id, shelf)
          }} />
        )} />
         </div>
        </Router>
      </div>
    );
  }
}
