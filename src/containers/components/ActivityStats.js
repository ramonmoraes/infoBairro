import React, { Component } from 'react';
import CircleCountContainer from '../CircleCountContainer';

class ActivityStats extends Component {

  render() {
    return (
    <div className='activity stats'>
      <h1>Estastísticas</h1>

      <section>
        <div className='hero'>
          <h1> oi </h1>
          <CircleCountContainer/>
        </div>

        <div className='hero'>
          <h1> oi </h1>
          <CircleCountContainer/>
        </div>
      </section>

    </div>
    );
  }
}

export default ActivityStats;
