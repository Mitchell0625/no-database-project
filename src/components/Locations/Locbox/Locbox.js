import React, { Component } from "react";
import "./Locbox.css";

class Locbox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      placesTry: [],
      locations: props.state
    };

    this.placesTry = this.placesTry.bind(this);
  }
  placesTry(val) {
    this.setState({ placesTry: val });
  }

  deleteLoc(id) {}

  render() {
    return (
      <div className="loc-container">
        <h2>{this.props.name}</h2>
        <p>{this.props.address}</p>
        <p>
          {this.props.city}
          {this.props.state}
        </p>
        <div>
          <button
            onClick={e => {
              this.placesTry(e.target.value);
            }}
          >
            Add to Places
          </button>
        </div>
      </div>
    );
  }
}

export default Locbox;
