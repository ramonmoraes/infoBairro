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
      countUp:this.props.countUp || 1000
    }
  }

  componentDidMount(){
    this.draw()
  }

  draw = (x,y) => {
    let c = this.refs.circle;
    let context = c.getContext("2d");
    let amount = x || 5;
    if(amount>this.state.max) amount=this.state.max ;
    let count = y || 5;
    if(count>this.state.countUp) count=this.state.countUp;

    let countInc = Math.round(this.state.countUp / 20);

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

    context.fillStyle = "black";
    context.font = "20px Arial";
    context.textAlign = "center";
    context.fillText(count,centerX,centerY+5);

    context.beginPath();
    context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
    context.lineWidth = 5;
    context.strokeStyle = '#222';
    context.stroke();

    let inc = setInterval(() => {
      amount = amount+3;
      count=count+countInc;

      if(amount<=full){
        this.draw(amount,count)
        clearInterval(inc)
      }else{
        if(count<this.state.countUp){
          this.draw(amount,count)
        }
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
