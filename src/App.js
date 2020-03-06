import React from 'react';
import './App.css';
import Logic from './components/logic.js';

function NewLaader(props) {
  return (
    <div>
      <h2> {props.text} </h2> 
       <p> {props.time} </p>
      </div>
  )
}
class Clock extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        In: new Date().toLocaleTimeString(),
        Total: "",
        punchStatus: "Clock In"
      }
    }
    calculateTime() {
      let extractNumbers = /\d+/g;
      let start = this.state.In.match( extractNumbers );
      let end = new Date().toLocaleTimeString().match( extractNumbers );
      console.log(start, end)


      // need a more complicated clock -- spin out its own module!
      let seconds = end[2] * 1 - start[2] * 1;
      let minutes = 0;
      let hours = 0;
      if (seconds < 0) {
        minutes = end[1] * 1 - (start[1] * 1) + 1; 
      } else {
        minutes = end[1] * 1 - start[1];
      }

      if (minutes < 0) {
        hours = end[0] * 1 - (start[0] * 1) + 1;
      } else {
        hours = end[0] * 1 - start[0] * 1;
      }
      console.log("your worked for ", hours, " hours", minutes, seconds)

    }

    // Might need a bigger/more complicated "session" object, to hold the relevant data.
    handleClick() {
      if (this.state.punchStatus === "Clock In") {
        this.setState({
          In: new Date().toLocaleTimeString(),
          punchStatus: "Clock Out"
        });
      } else if (this.state.punchStatus === "Clock Out") {
        this.setState({
          punchStatus: "Clock In",
        })
        this.calculateTime();
      }
    }

    render() {
      return (
        <div>
          <h1> {new Date().toLocaleTimeString()}</h1>
          <p> {this.state.In} </p>
          <p> {this.state.Out} </p>
          <p> {this.state.Total} </p>
          <button onClick={() => this.handleClick()}> {this.state.punchStatus} </button>
        </div>
      )
    }
}

class Testing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Laaders: Logic(),
      newStatus: ""
    }
    this.handlelick = this.handleClick.bind(this);

  }
  updateInput(e) {
    this.setState({newStatus: e.target.value})
  }

  handleClick(e) {
    e.preventDefault();
    let molly = this.state.newStatus;
    this.state.Laaders.createRung(molly);
    e.target.previousSibling.value = "";
    this.setState({});
  }
  drawLaaders() {
    let laaderArr = []
    let laaders = this.state.Laaders.laader;

    laaders.forEach((laader) => {
      laaderArr.push(<NewLaader text={laader.text} time={laader.time}></NewLaader>)
    })
    return (
      <div className="Scaffold">
        {laaderArr}
      </div>
    )
  }


  render() {
    return (
      <div>
      <div> 
      <Clock></Clock>
      {this.drawLaaders()} </div>
      <form>
      <input type="text" id="text" onChange={(e) => { this.updateInput(e) }}></input>
      <button onClick={(e) => this.handleClick(e)}> add </button> 
      </form>

      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <h1> Hello There </h1>
      <Testing></Testing> 
    </div>
  );
}

export default App;
