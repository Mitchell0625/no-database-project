import React, { Component } from "react";

import "./Locations.css";
import Locbox from "./Locbox/Locbox";

class Locations extends Component {
  constructor(props) {
    super(props);

    this.state = {
      category: ["Restaurant", "Bar"]
    };
  }

  render() {
    return (
      <div className="container">
        <Locbox />
      </div>
    );
  }
}
export default Locations;
