import React, { Component } from 'react';

class ActivityContato extends Component {
  render() {
    return (
      <div className='activity'>
      <h1>Contatos</h1>
      <section>
        <div>
          <p> Telefone : 71 98806-5757 </p><br/>
          <p>E-mail : portalinfostella@gmail.com </p><br/>
          <p> Midia Sociais</p>
          <ul>
            <li>Stella :
              <a target ="blank" href='https://www.instagram.com/infostellaba/'>
                 www.instagram.com/infostellaba
              </a>
            </li>
            <li>Paralela :
              <a target ="blank" href='https://www.instagram.com/infoparalela/'>
                 www.instagram.com/infoparalela
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
