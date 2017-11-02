import React, { Component } from 'react';
import Menu from './components/Menu.js'; // <-sem .js nao pega '-'

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
    return (
      <Menu hidden={this.state.hidden} handleHidden={this.handleHidden}/>
    );
  }
}

export default MenuContainer;
