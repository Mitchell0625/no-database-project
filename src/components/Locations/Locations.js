import React, { Component } from "react";
import axios from "axios";

class Locations extends Component {
  constructor(props) {
    super(props);

    this.state = {
      locations: []
    };
  }
  componentDidMount() {
    axios.get("/api/locations").then(locResults => {
      console.log(locResults);
      this.setState({ locations: locResults.data });
    });
  }

  render() {
    const { locations } = this.state;
    let locationList = locations.map((e, i) => {
      return (
        <h2
          key={i}
          name={e.name}
          address={e.location.address}
          city={e.location.city}
        >
          {e.name}
          {e.location.address}
          {e.location.city}
        </h2>
      );
    });
    return <div>{locationList}</div>;
  }
}
export default Locations;
