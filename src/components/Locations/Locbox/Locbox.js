import React, { Component } from "react";
import "./Locbox.css";

class Locbox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      placesToTry: [],
      flag: false
    };
    // this.editName = this.editName.bind(this);
    this.handleAddToPlaces = this.handleAddToPlaces.bind(this);
  }

  handleAddToPlaces(val) {
    const { placesToTry } = this.state;
    this.props.locations.map((e, i) => {
      if (this.props.locations[e].id === val) {
        placesToTry.push(this.props.locations[e]);
        this.props.locations.splice(i, 1);
      }
    });
  }

  //   this.setState({ placesToTry: placesToTry });
  //   console.log({ placesToTry });
  //   addToPlaces(val) {
  //     this.setState({ placesToTry: val });
  //   }
  // }
  deleteLoc(id) {}

  // editName() {
  //   this.setState({ flag: true });
  // }
  // editing(val) {
  //   this.setState();
  // }

  render() {
    // if (this.state.flag) {
    //   return <input placeholder="Edit Name" />;
    // }
    return (
      <div className="loc-container">
        <h2
        // onClick={e => {
        //   this.editName();
        // }}
        >
          {this.props.name}
        </h2>
        <p>{this.props.address}</p>
        <p>
          {this.props.city},
          {this.props.state}
        </p>
        <div>
          <button
            onClick={e => {
              this.handleAddToPlaces;
            }}
          >
            Save to List
          </button>
          <button>Delete Place</button>
        </div>
      </div>
    );
  }
}

export default Locbox;
