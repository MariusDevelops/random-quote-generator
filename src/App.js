import React from "react";
import axios from "axios";
// use it for get request certain API, npm install --save axios

import "./App.css";

class App extends React.Component {
  state = { advice: "" }; // helps get to h1

  componentDidMount() {
    // console.log("COMPONENT DID MOUNT");
    this.fetchAdvice();
  }

  fetchAdvice = () => {
    // no need const because it is in funcion and becomes a method - function that belongs to a class.
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        const { advice } = response.data.slip;
        // console.log(response.data.slip.advice);
        // console.log(advice);
        this.setState({ advice });
        // this.setState({ advice: advice }); - it can have one advice, JS rule...
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { advice } = this.state;
    return (
      <div className="app">
        <div className="card">
          <h1 className="heading">{advice}</h1>
        </div>
      </div>
    );

    // return <h1>{this.state.advice}</h1>; - destructured
  }
}

// notes:
// https://api.adviceslip.com/
export default App;
