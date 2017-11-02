import React, { Component } from 'react';

class ActivityInicio extends Component {
  constructor(props){
    super(props);
    this.state ={
      left:"-100vw"
    }
  }
  
  componentWillMount(){
    // this.setState({left:"0vw"});
    setTimeout(() => {
      console.log('oi');
      this.setState({left:"0vw"});
    },1);
  }

  render() {
    return (
      <nav className='hamburger'>
          <img onClick={this.props.handleHidden} src='/assets/menu2.png' alt='menu2'/>
      </nav>
    );
  }
}

export default ActivityInicio;
