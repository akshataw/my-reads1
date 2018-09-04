import React from 'react';
import { PropTypes } from 'prop-types';

export default class Cover extends react.Component{
  static PropTypes = {
    books : PropTypes.string.isRequired,
    imageURL : PropTypes.object.isRequired,
  };

let image = (this.props.imageURL && this.props.imageURL.smallThumbnail) ? this.props.imageURL.smallThumbnail : '';

let styles = (image ) ? {width: 128, height: 193, backgroundImage: `url('${image}')`} : {width: 128, height: 193, backgroundImage:''};

  render(){
    return(
      <div className="cover" style={styles}>
      </div>
    )
  }
}
