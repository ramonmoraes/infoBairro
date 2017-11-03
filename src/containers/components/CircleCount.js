import React, { Component } from 'react';

class CircleCount extends Component {
  constructor(props){
    super(props);
    this.state={
      width:this.props.width || 100,
      height:this.props.height || 100,
      radius:this.props.radius ||50,
      color:this.props.color || "#13a8a4",
      max:this.props.max || 100,
    }
  }
  componentDidMount(){
    this.draw()
  }
  draw = (x) => {
    let amountToIncrease = 10;
    let c = this.refs.circle;
    let context = c.getContext("2d");
    let amount = x || 10;
    if(amount>this.state.max) amount=this.state.max ;
    let centerX = this.state.width / 2;
    let centerY = this.state.height / 2;
    let radius = this.state.radius;
    let full = this.state.max;

    context.beginPath();
    context.arc(centerX,centerY,radius,0,2*Math.PI);
    context.clip();
    context.fillStyle = this.state.color;

    context.fillRect(centerX - radius, centerY + radius, radius * 2, -amount);
    context.restore();

    context.beginPath();
    context.arc(centerX, centerY, radius-8, 0, 2 * Math.PI, false);
    context.lineWidth = 1;
    context.fillStyle = "white";
    context.fill();
    context.strokeStyle = 'white';
    context.stroke();

    context.beginPath();
    context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
    context.lineWidth = 5;
    context.strokeStyle = '#222';
    context.stroke();

    let inc = setInterval(() => {
      amount = amount+3;
      console.log(amount);
      if(amount<=full){
        this.draw(amount)
        clearInterval(inc)
      }else{
        clearInterval(inc)
      }
    },33);

  }
  render() {
    return (
    <div>
      <canvas ref="circle" width={this.state.width} height={this.state.height}/>
    </div>
    );
  }
}

export default CircleCount;
