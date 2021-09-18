import React from 'react';
import '../css/style.css';

class Clock extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      timesecunds: 1500,
      play: false
    };
    this.play = this.play.bind(this);
    this.coofe = this.coofe.bind(this);
    this.restart = this.restart.bind(this);
    this.pausar = this.pausar.bind(this);
  }
  
  componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  
  tick() {

  if(this.state.play === true && this.state.timesecunds > 0){
      this.setState({
        timesecunds: this.state.timesecunds - 1
      });
    }else{
      this.setState({
        timesecunds: this.state.timesecunds
      });
    }
  
  }

  play(){  
    this.setState({
      play: true
    });
  }

  coofe(){  
    this.setState({
      timesecunds: 10,
      play: false
    }); 
  }

  restart(){  
    this.setState({
      timesecunds: 1500,
      play: false
    });
  }

  pausar(){  
    this.setState({
      play: false
    });
  }

  convert(){
    
    let m = Math.floor(this.state.timesecunds/60);
    let s = Math.floor(this.state.timesecunds%60);

    return m +":"+s;

  }

  render() {
    return (
      <div className="container">

        <h2 >{this.convert()}</h2>
          <button onClick={this.restart}>Pomodoro(25 min)</button>

          <br></br>
          <button onClick={this.coofe}>intervalo(5 min)</button>
          <br></br>
          
          <button onClick={this.play}>Iniciar</button>
          
          <button onClick={this.pausar}>pausar</button>
        
      </div>
    );
  }
}

export default Clock;
