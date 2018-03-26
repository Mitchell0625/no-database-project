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
  }

  handleAddToPlaces(id) {
    const { tryPlace } = this.state;
    const { locations, handleAdd } = this.props;
    let index = locations.findIndex(e => e.id === id);
    let spliced = locations.splice(index, 1);
    handleAdd(locations, spliced);
    console.log(spliced);
  }

  editName() {
    this.setState({ flag: true });
  }
  editing(val) {
    this.setState((this.props.name: val));
  }

  render() {
    if (this.state.flag) {
      return (
        <div className="loc-container">
          <input placeholder="Edit Name" />
          <p>{this.props.address}</p>
          <p>
            {this.props.city}, {this.props.state}
          </p>
        </div>
      );
    }

    const { placesToTry } = this.state;
    const { id } = this.props;

    // placesToTry = () => {
    //   return (
    //     <div className="places">
    //       <h2>{this.props.name}</h2>
    //       <p>{this.props.address}</p>
    //       <p>
    //         {this.props.city},
    //         {this.props.state}
    //       </p>
    //     </div>
    //   );
    // };

    return (
      <div className="loc-container">
        <h2
          onClick={e => {
            this.editName();
          }}
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
            className="box-button"
            onClick={() => {
              this.handleAddToPlaces(id);
            }}
          >
            Save to List
          </button>
          <button
            className="delete box-button"
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
