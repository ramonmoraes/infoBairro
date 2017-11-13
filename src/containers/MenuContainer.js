import React, { Component } from 'react';
import MenuSide from './components/MenuSide.js'; // <-sem .js nao pega '-'

class MenuContainer extends Component {
  constructor(props){
    super(props);
    this.state={
      hidden:true
    }
  }
  handleHidden = () => {
    this.setState({
      hidden : (this.state.hidden) ? false : true
    })
  }
  render() {
    return (
      <MenuSide handleHidden={this.handleHidden}/>
  )
  }
}

export default MenuContainer;
