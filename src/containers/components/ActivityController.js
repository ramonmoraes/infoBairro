import React, { Component } from 'react';
import MenuContainer from '../MenuContainer'
import ContentContainer from '../ContentContainer'

class ActivityController extends Component {
  render() {

    return (
      <div>
        <MenuContainer/>
        <ContentContainer activity={this.props.activity}/>
      </div>
    );
  }
}

export default ActivityController;
