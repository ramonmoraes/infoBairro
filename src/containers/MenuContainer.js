import React, { Component } from 'react';
import MenuTop from './components/MenuTop.js'; // <-sem .js nao pega '-'
import MenuSide from './components/MenuSide.js'; // <-sem .js nao pega '-'

class MenuContainer extends Component {
  constructor(props){
    super(props);
    this.state={
      hidden:false
    }
  }
  handleHidden = () => {
    this.setState({
      hidden : (this.state.hidden) ? false : true
    })
  }
  render() {
    return (this.state.hidden) ?
    <MenuTop handleHidden={this.handleHidden}/>
    :
    <MenuSide handleHidden={this.handleHidden}/>
  }
}

export default MenuContainer;
