import React, { Component } from 'react';
import ActivitiesController from './components/ActivitiesController';

class ActivityControllerContainer extends Component {
  constructor(props){
    super(props);
    this.state={
      activity:"#inicio"
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
      <ActivitiesController activity={this.state.activity}/>
    );
  }
}

export default ActivityControllerContainer;
