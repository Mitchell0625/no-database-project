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
      tryPlace: [],
      userInput: "",
      category: ["Bar", "Restaurant"]
    };
    this.changeCategory = this.changeCategory.bind(this);
    this.addLoc = this.addLoc.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }
  componentDidMount() {
    axios.get("/api/locations").then(locResults => {
      this.setState({ locations: locResults.data });
    });
  }

  // Doesn't work
  addLoc(name, address, city, state) {
    axios
      .post("/api/locations", { name, address, city, state })
      .then(results => {
        console.log(results);
        this.setState({ locations: results.data });
      });
  }

  changeName(name, id) {
    axios.put(`/api/locations/${id}/${name}`).then;
  }

  deleteLoc() {}
  changeCategory(val) {
    this.setState({ category: val });
  }

  handleAdd(locations, spliced) {
    // console.log(locations, spliced);
    this.setState({
      locations: locations,
      tryPlace: spliced
    });
  }

  render() {
    const { locations, category } = this.state;

    let locationList = locations.map((loc, i) => {
      return (
        <Locbox
          key={i}
          name={loc.name}
          address={loc.location.address}
          city={loc.location.city}
          state={loc.location.state}
          locations={locations}
          id={loc.id}
          handleAdd={this.handleAdd}
        />
      );
    });

    return (
      <div className="App">
        <Header />
        <Category />
        <Input addLoc={this.addLoc} />

        <div className="container">{locationList}</div>
      </div>
    );
  }
}

export default App;
//App.js will hold locations and get statement
