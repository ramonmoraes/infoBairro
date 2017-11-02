import React, { Component } from 'react';
import ActivityController from './components/ActivityController';

class ActivityControllerContainer extends Component {
  constructor(props){
    super(props);
    this.state={
      activity:"#main"
    }
  }
  componentDidMount(){
    this.hashChanger();
  }
  hashChanger = () => {
    window.addEventListener('hashchange', (ev) => {
      this.setState({activity:window.location.hash});
    })
  }

  render() {
    return (
      <ActivityController activity={this.state.activity}/>
    );
  }
}

export default ActivityControllerContainer;
