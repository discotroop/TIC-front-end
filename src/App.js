import React from 'react';
import './App.css';
import Rung from './components/rung.js';

class Testing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: ["sample"],
      newStatus: ""
    }
    this.handleClick = this.handleClick.bind(this);

  }
  updateInput(e) {
    this.setState({newStatus: e.target.value})
  }

  handleClick() {
    console.log("clicked")
    let molly = this.state.newStatus;
    let sample = this.state.status;
    sample.push(molly);
    this.setState( {
      status: molly, 
    }
    ) 
  }


  render() {
    return (
      <div>
      <div> {this.state.status} </div>
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
      <Testing />
    </div>
  );
}

export default App;
