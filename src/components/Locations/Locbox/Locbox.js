import React, { Component } from "react";
import axios from "axios";
import "./Locbox.css";

class Locbox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flag: false,
      userInput: ""
    };

    this.handleAddToPlaces = this.handleAddToPlaces.bind(this);
    this.editing = this.editing.bind(this);
    this.confirm = this.confirm.bind(this);
  }

  handleAddToPlaces(id) {
    const { handleAdd } = this.props;

    handleAdd(id);
  }

  editName() {
    this.setState({ flag: true });
  }
  editing(val) {
    this.setState({ userInput: val });
  }

  confirm(event) {
    if (event.keyCode === 13) {
      this.props.changeName(this.state.userInput, this.props.id);
      this.setState({ flag: false });
    }
  }

  render() {
    if (this.state.flag) {
      return (
        <div className="loc-container">
          <input
            placeholder="Edit Name"
            onChange={e => {
              this.editing(e.target.value);
            }}
            onKeyDown={this.confirm}
          />
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
