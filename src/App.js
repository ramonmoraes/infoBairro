import React, { Component } from 'react';
import './App.css';
import './menu.css';

import ActivityControllerContainer from './containers/ActivityControllerContainer';
class App extends Component {
  render() {
    return (
        <ActivityControllerContainer/>
    );
  }
}

export default App;
