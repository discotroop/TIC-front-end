import React from 'react';
import './App.css';
import Logic from './components/logic.js';

function NewLaader(props) {
  return (
    <div> {props.text} {props.time} </div>
  )
}

class Testing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Laaders: Logic(),
      newStatus: ""
    }
    // this.handlelick = this.handleClick.bind(this);

  }
  updateInput(e) {
    this.setState({newStatus: e.target.value})
  }

  handleClick() {
    console.log("clicked")
    let molly = this.state.newStatus;
    this.state.Laaders.createRung(molly);
    console.log(this.state.Laaders.laader)
  }
  NewLaader(props) {
    return (
      <div> {props.text} {props.time} </div>
    )
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
      {this.state.Laaders.createRung("hllo")}
      {this.drawLaaders()} </div>
      <form>
      <input type="text" id="text" onChange={(e) => { this.updateInput(e) }}></input>
      <button onClick={() => this.handleClick()}> add </button> 
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
