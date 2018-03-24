import React, { Component } from "react";
import "./reset.css";
import "./App.css";
import axios from "axios";

//Components
import Header from "./components/Header/Header";
import Input from "./components/Input/Input";
import Locations from "./components/Locations/Locations";
import Category from "./components/Category/Category";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      locations: [],
      bars: [],
      tryPlace: []
    };
  }

  render() {
    return (
      <div className="App">
        <Header />

        <Locations />

        {/* <Category /> */}
      </div>
    );
  }
}

export default App;
