import React, { Component } from 'react';

class ActivityContato extends Component {
  render() {
    return (
      <div className='activity'>
      <h1>Contatos</h1>
      <section>
        <div className='contato'>
          <p> Telefone : 71 98806-5757 </p><br/>
          <p>E-mail : portalinfostella@gmail.com </p><br/>
          <p> Midia Sociais</p>
          <ul>
            <li><span className='stella'>Stella</span> :
              <a target ="blank" href='https://www.instagram.com/infostellaba/'>
                 @infostellaba
              </a>
            </li>
            <li><span className='paralela'>Paralela</span> :
              <a target ="blank" href='https://www.instagram.com/infoparalela/'>
                 @infoparalela
              </a>
            </li>
          </ul>
        </div>
      </section>
      </div>
    );
  }
}

export default ActivityContato;
