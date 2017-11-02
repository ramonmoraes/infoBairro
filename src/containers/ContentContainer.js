import React, { Component } from 'react';
import ActivityInicio from './components/ActivityInicio';
import ActivityStats from './components/ActivityStats';
import ActivityInfo from './components/ActivityInfo';
import ActivityContato from './components/ActivityContato';

class ContentContainer extends Component {
  getContent = () => {
    let res;
    switch (this.props.activity) {
      case "#inicio":
       res =  <ActivityInicio/>;
      break;

      case "#stats":
       res =  <ActivityStats/>;
      break;

      case "#info":
       res =  <ActivityInfo/>;
      break;

      case "#contato":
       res =  <ActivityContato/>;
      break;

      default:
       res =  <ActivityInicio/>;
    }
    return res;
  }
  render() {
    let content = this.getContent();
    return (
      <div>
      {content}
      </div>
    );
  }
}

export default ContentContainer;
