import React, { Component } from "react";
import "./Category.css";

class Category extends Component {
  constructor(props) {
    super(props);

    this.state = {
      locations: this.props,
      category: ["Restaurant", "Bar"]
    };
  }

  filterCategory(val) {
    this.props.locations.filter((e, i) => {
      return this.state.category.includes(e.categories[0].name);
    });
  }

  render() {
    return (
      <div className="category-position">
        <select
          onChange={e => {
            this.filterCategory;
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
