import React, { Component } from "react";
import "./reset.css";
import "./App.css";
import axios from "axios";
import Header from "./components/Header/Header";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      restaurants: [],
      bars: []
    };
  }

  componentDidMount() {
    axios.get("/api/restaurants").then(restResults => {
      console.log(restResults);
      this.setState({ restaurants: restResults.data });
    });

    axios.get("/api/bars").then(barResults => {
      console.log(barResults);
      this.setState({ bars: barResults.data });
    });
  }
  render() {
    const { restaurants } = this.state;
    let restaurantList = restaurants.map((e, i) => {
      return (
        <h2 key={i} name={e.name} address={e.location.address}>
          {e.name}
        </h2>
      );
    });
    const { bars } = this.state;
    let barList = bars.map((e, id) => {
      return (
        <h2 key={id} name={e.name} address={e.location.address}>
          {e.name}
        </h2>
      );
    });

    return (
      <div className="App">
        <Header />

        {restaurantList}
        {barList}
      </div>
    );
  }
}

export default App;
