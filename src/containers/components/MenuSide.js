import React, { Component } from 'react';
import MenuTop from './MenuTop.js'; // <-sem .js nao pega '-'

class Menu extends Component {
  constructor(props){
    super(props);
    this.state={
      left:0
    }
  }

  changeActivity =(ev)=> {
    window.location.hash=ev.target.value
    this.props.handleHidden();
  }

  componentDidMount(){

    this.refs.container.addEventListener('click',(ev) => {
      this.hideNav()
    });

    this.refs.nav.addEventListener('click',(ev) => {
      // ev.stopPropagation();
    });

  }

  showNav =()=> {
    this.refs.container.style.display='initial';
    setTimeout(() => {
      this.refs.nav.style.left="0vw";
      this.refs.container.style.backgroundColor='rgba(0,0,0,0.35)';
    },5)
  }

  hideNav =()=> {
    this.refs.nav.style.left="-100vw";
    this.refs.container.style.backgroundColor='rgba(0,0,0,0)';
    setTimeout(() => {
      this.refs.container.style.display='none';
    },400)
  }

  render() {
    return (
      <div>
      <div className='side-nav-container' ref='container'>
        <nav className='side-nav' ref='nav'>
        <header> <h1> Menu </h1> </header>
          <div className='btn-wrapper'>
            <button  value='inicio' onClick={this.changeActivity}> Inicio </button>
            <button  value='stats' onClick={this.changeActivity}> Estastísticas </button>
            <button  value='info' onClick={this.changeActivity}> Informações </button>
            <button  value='contato' onClick={this.changeActivity}> Contato </button>
            <button  value='fechar' onClick={this.hideNav}> Fechar Menu </button>
          </div>
        </nav>
      </div>
      <MenuTop showNav={this.showNav}/>
      </div>
    );
  }
}

export default Menu;
