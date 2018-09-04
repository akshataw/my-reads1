import React from 'react';
import { PropTypes } from 'prop-types';

export default class Book extends React.Component{

  static propTypes = {
      imageURL: PropTypes.object.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.array,
      shelf: PropTypes.string.isRequired,
      onShelfChange: PropTypes.func.isRequired
    }

    changeShelf = (event) => {
      this.props.onShelfChange(event.target.value)
    }

    render(){
      const imageURL = this.props.imageURL.thumbnail || this.props.imageURL.smallThumbnail
    return(
      <li>
        <div className="book">
          <div className="top">
            <div className="cover" style={{
                width: 120,
                height: 200,
                backgroundImage: imageURL ? (`url(${imageURL})`) : (`url(https://dummyimage.com/128x170/4f4f4f/ffffff.jpg&text=No+Book+Art)`)
              }}></div>
            <div className="book-shelf-changer">
              <select onChange={this.changeShelf} value={this.props.shelf}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none" selected>None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{`${this.props.title}`}</div>
          {this.props.author && this.props.author.map((author,index)=>(
            <div
              className="book-authors"
              key={index}
            >{`${author}`}</div>
          ))}
        </div>
      </li>
    )
  }
}
