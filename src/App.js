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
import Places from "./components/Locations/Places/Places";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      locations: [],
      tryPlace: [],
      category: "",
      userInput: ""
    };
    this.changeCategory = this.changeCategory.bind(this);
    this.addLoc = this.addLoc.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.deleteLoc = this.deleteLoc.bind(this);
    this.changeName = this.changeName.bind(this);
  }
  componentDidMount() {
    axios.get("/api/locations").then(locResults => {
      this.setState({ locations: locResults.data });
    });
  }

  addLoc(name, address, city, state, category) {
    axios
      .post("/api/locations", { name, address, city, state, category })
      .then(results => {
        console.log(results);
        this.setState({ locations: results.data });
      });
  }

  changeName(name, id) {
    axios.put(`/api/locations/${id}/${name}`).then(results => {
      this.setState({ locations: results.data });
    });
  }

  deleteLoc(id) {
    axios
      .delete(`/api/locations/${id}`)
      .then(res => {
        this.setState({ locations: res.data });
      })
      .catch(console.log);
  }

  changeCategory(val) {
    this.setState({ category: val });
  }

  handleAdd(id) {
    axios.post(`/api/saved/${id}`).then(res => {
      console.log("RES DATA", res.data[0], res.data[1]);
      this.setState({
        locations: res.data[0],
        tryPlace: res.data[1]
      });
    });
  }

  render() {
    const { locations, category } = this.state;

    let locationList = locations
      .filter(loc => loc.categories[0].name.includes(category))
      .map((loc, i) => {
        console.log(loc);
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
            deleteLoc={this.deleteLoc}
            changeName={this.changeName}
          />
        );
      });

    const { tryPlace } = this.state;
    let savedList = tryPlace.map((place, i) => {
      console.log(place);
      return (
        <Places
          key={i}
          nam={place.name}
          addy={place.location.address}
          cit={place.location.city}
          st={place.location.state}
          addSaved={this.handleAdd}
          tryPlace={tryPlace}
        />
      );
    });

    return (
      <div className="App">
        <Header />
        <Category changeCat={this.changeCategory} />
        <Input addLoc={this.addLoc} />
        {/* <Places /> */}
        <h1 className="ok">Places to Try</h1>
        <div className="saved-container">{savedList}</div>
        <div className="container">{locationList}</div>
      </div>
    );
  }
}

export default App;
//App.js will hold locations and get statement
