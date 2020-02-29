import React from 'react';
import logo from './logo.svg';
import './App.css';

const update = ["hi", "hello"]; 
console.log(update)

function HandleClick () {
  let testing = document.getElementById("inputter")
  console.log(testing)

}

function Updates (props) {
  return (
    <div> {props.list} </div>
  )
}

function App() {
  return (
    <div className="App">
      <h1> Hello There </h1>
      <div className="updates"> </div>
      <Updates list={update}> </Updates>
      <input type="text" id="inputter"></input> 
      <button onClick={HandleClick()}> hello </button> 
    </div>
  );
}

export default App;
