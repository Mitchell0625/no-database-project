import React, { Component } from "react";
import "./Input.css";

class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      address: "",
      city: "",
      state: "",
      category: ""
    };
    this.handleName = this.handleName.bind(this);
    this.handleAddress = this.handleAddress.bind(this);
    this.handleCity = this.handleCity.bind(this);
    this.handleState = this.handleState.bind(this);
    this.handleCategory = this.handleCategory.bind(this);
  }
  handleName(val) {
    this.setState({ name: val });
  }
  handleAddress(val) {
    this.setState({ address: val });
  }
  handleCity(val) {
    this.setState({ city: val });
  }
  handleState(val) {
    this.setState({ state: val });
  }

  handleCategory(val) {
    this.setState({ category: val });
  }

  render() {
    let { addLoc } = this.props;
    let { name, address, city, state, category } = this.state;

    return (
      <div className="input-boxes">
        <input
          placeholder="name"
          onChange={e => this.handleName(e.target.value)}
        />
        <input
          placeholder="address"
          onChange={e => this.handleAddress(e.target.value)}
        />
        <input
          placeholder="city"
          onChange={e => this.handleCity(e.target.value)}
        />
        <input
          placeholder="state"
          onChange={e => this.handleState(e.target.value)}
        />
        <input
          placeholder="category"
          onChange={e => this.handleCategory(e.target.value)}
        />
        <button onClick={() => addLoc(name, address, city, state, category)}>
          Add Location
        </button>
      </div>
    );
  }
}
export default Input;
