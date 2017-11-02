import React, { Component } from 'react';

class Menu extends Component {
  constructor(props){
    super(props);
    this.state={
      left:(this.props.hidden) ? "-100vw" : "0vw"
    }
  }

  animation = (ev) => {
    this.props.handleHidden()
    this.setState({
        left : (this.state.left==='0vw') ? "-100vw" : "0vw"
      });
      let element = ev.target;
    if(element.name==='menu'){
      element.classList.add("rotate");
      setTimeout(() => {
        element.classList.remove("rotate");
      },350)
    }
  }
  changeActivity =(ev)=> {
    this.animation(ev);
    window.location.hash=ev.target.value
  }

  render() {
    return (
      <div className='menuWrapper'>
      <nav className='menu' style={this.state}>
      <div className='btnWrapper content' style={this.state}>
        <button  value='inicio' onClick={this.changeActivity}> Inicio </button>
        <button  value='stats' onClick={this.changeActivity}> Estastísticas </button>
        <button  value='info' onClick={this.changeActivity}> Informações </button>
        <button  value='contato' onClick={this.changeActivity}> Contato </button>
      </div>
      </nav>
        <img name='menu' className='hamburger'src='/assets/menu.png' alt='oi' onClick={this.animation} style={this.state}/>;
      </div>
    );
  }
}

export default Menu;
