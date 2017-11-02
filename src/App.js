import React, { Component } from 'react';
import './App.css';
import ActivityControllerContainer from './containers/ActivityControllerContainer';
class App extends Component {
  render() {
    return (
      <div className="App">
        <ActivityControllerContainer/>
      </div>
    );
  }
}

export default App;
