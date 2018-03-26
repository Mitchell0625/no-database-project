import React, { Component } from "react";
import "./Category.css";

class Category extends Component {
  constructor(props) {
    super(props);

    this.state = {
      category: ""
    };
  }

  render() {
    return (
      <div className="category-position">
        <select
          onChange={e => {
            this.props.changeCat(e.target.value);
          }}
        >
          <option value="">All</option>
          <option value="Bar">Bar</option>
          <option value="Restaurant">Restaurant</option>
        </select>
      </div>
    );
  }
}

export default Category;
