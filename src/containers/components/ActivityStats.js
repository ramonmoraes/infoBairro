import React, { Component } from 'react';
import CircleCount from './CircleCount';

class ActivityStats extends Component {

  render() {
    return (
    <div className='activity stats'>
      <h1>Estastísticas</h1>

      <section>
      <div className='hero'>
        <h1 className='post'> Postagens </h1>
        <CircleCount color='#FCCE04' max={100} countUp={35}/>
        <p>Por semana !</p>
      </div>

        <div className='hero'>
          <h1 className='stella'> Stella </h1>
          <CircleCount color="#02A9D7" max={85} countUp={6696}/>
          <p>Seguidores!</p>

        </div>

        <div className='hero'>
          <h1 className='paralela'> Paralela </h1>
          <CircleCount color='#13A20A' max={35} countUp={1779}/>
          <p>Seguidores!</p>

        </div>
      </section>
      <section>
        <div>
          <p>
            Informações mais especificas de dados, tais como :
          </p>

          <ul>
            <li>Idade Media</li>
            <li>Classe Social</li>
            <li>Porcentagem de Sexo</li>
          </ul>
          <p>
            Para assim poder vender melhor o produto
          </p>
        </div>
      </section>
    </div>
    );
  }
}

export default ActivityStats;
