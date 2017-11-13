import React, { Component } from 'react';
// import MenuSide from './MenuSide.js'; // <-sem .js nao pega '-'

class ActivityInicio extends Component {
  render() {
    return (
      <div>
      <nav className='navTop'>
        <div className='btnWrapper'>
          <img onClick={this.props.showNav} src='/assets/menu2.png' alt='menu2'/>
          <h1> Info midia kit </h1>
        </div>
      </nav>
      </div>
    );
  }
}

export default ActivityInicio;
