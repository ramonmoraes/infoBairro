import React, { Component } from 'react';

class ContentContainer extends Component {
  render() {
    let content;
    switch (this.props.activity) {
      case "#inicio":
        
      break;

      case "stats":

      break;

      case "info":

      break;

      case "contato":

      break;

      default:
      console.log('default');
    }
    return (
    {content}
    );
  }
}

export default ContentContainer;
