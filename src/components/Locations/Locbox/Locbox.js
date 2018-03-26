import React, { Component } from "react";
import axios from "axios";
import "./Locbox.css";

class Locbox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tryPlace: [],
      flag: false
    };
    // this.editName = this.editName.bind(this);
    this.handleAddToPlaces = this.handleAddToPlaces.bind(this);
    // this.deleteLoc = this.deleteLoc.bind(this);
  }

  handleAddToPlaces(id) {
    const { tryPlace } = this.state;
    const { locations, handleAdd } = this.props;
    let index = locations.findIndex(e => e.id === id);
    let newArr = locations.map((e, i) => {});

    let spliced = locations.splice(index, 1);

    // handleAdd(locations, spliced);
    console.log(spliced);
  }

  handleDelete(id) {
    const { locations, handleDelete } = this.props;
  }

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

    const { placesToTry } = this.state;
    const { id } = this.props;

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
            onClick={() => {
              this.handleAddToPlaces(id);
            }}
          >
            Save to List
          </button>
          <button
            className="delete"
            onClick={() => this.props.deleteLoc(this.props.id)}
          >
            Delete Place
          </button>
        </div>
      </div>
    );
  }
}

export default Locbox;
