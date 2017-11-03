import React, { Component } from 'react';

class Menu extends Component {
  constructor(props){
    super(props);
    this.state ={
      left:"-100vw"
    }
  }

  changeActivity =(ev)=> {
    window.location.hash=ev.target.value
    this.props.handleHidden();
  }

  componentWillMount(){
    setTimeout(() => {
      this.setState({left:"0vw"});
    },1);
  }

  componentWillUnMount(){
  }


  render() {
    return (
      <div className='menuWrapper'>
        <nav className='menu'>
          <div className='btnWrapper content' style={this.state}>
            <button  value='inicio' onClick={this.changeActivity}> Inicio </button>
            <button  value='stats' onClick={this.changeActivity}> Estastísticas </button>
            <button  value='info' onClick={this.changeActivity}> Informações </button>
            <button  value='contato' onClick={this.changeActivity}> Contato </button>
            <button onClick={this.props.handleHidden}> Fechar Menu </button>
          </div>
        </nav>
      </div>
    );
  }
}

export default Menu;
