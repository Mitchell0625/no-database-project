import React, { Component } from "react";
import "./reset.css";
import "./App.css";
import axios from "axios";

//Components

import Header from "./components/Header/Header";
import Input from "./components/Input/Input";
import Locations from "./components/Locations/Locations";
import Category from "./components/Category/Category";
import Locbox from "./components/Locations/Locbox/Locbox";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      locations: [],
      bars: [],
      tryPlace: [],
      userInput: ""
    };
    this.changeCategory = this.changeCategory.bind(this);
  }
  componentDidMount() {
    axios.get("/api/locations").then(locResults => {
      console.log(locResults);
      this.setState({ locations: locResults.data });
    });
  }

  addLoc(id, name, address, city, state) {
    axios
      .post("./api/locations/", { id, name, address, city, state })
      .then(results => {
        this.setState({ locations: results.data });
      });
  }

  changeName(name, id) {
    axios.put(`/api/locations/${id}/${name}`);
  }

  deleteLoc() {}
  changeCategory(val) {
    this.setState({ category: val });
  }

  render() {
    const { locations, category } = this.state;

    let locationList = locations.map((e, i) => {
      return (
        <Locbox
          key={e.id}
          name={e.name}
          address={e.location.address}
          city={e.location.city}
          state={e.location.state}
        />
      );
    });
    return (
      <div className="App">
        <Header />
        <Category />
        {/* <Input /> */}
        <Locations />
        {locationList}
      </div>
    );
  }
}

export default App;
//App.js will hold locations and get statement
