import React, { Component } from 'react';

class ActivityInicio extends Component {
  render() {
    window.location.href="#inicio";
    return (
      <div className='activity inicio'>
        <div className='header'>
          <h1><span className='stella'>Stella</span> & <span className='paralela'>Paralela</span></h1>
          <h2> Info midia kit </h2>
          <p> Seu publico alvo localizado. </p>
        </div>

      <section>
        <div className='duo'>
          <div className='info'>
          <h1> Stella Info </h1>
          <p> Canal oficial dos Bairros de Stella Maris e Praia do Flamengo. </p>
          </div>
          <img alt='stella' src='https://instagram.fssa2-1.fna.fbcdn.net/t51.2885-19/s150x150/23161533_156330521773905_6106664095786729472_n.jpg'/>
        </div>
      </section>

      <section>
        <div className='duo'>
          <div className='info'>
            <h1> Paralela Info </h1>
            <p> Canal oficial do Bairro Paralela em Salvador. </p>
          </div>
          <img alt='paralela' src='https://instagram.fssa2-1.fna.fbcdn.net/t51.2885-19/s150x150/23161534_139890226655935_1592299459306323968_n.jpg'/>
        </div>
      </section>

      </div>
    );
  }
}

export default ActivityInicio;
