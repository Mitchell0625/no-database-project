import React, { Component } from "react";
import "./Category.css";

class Category extends Component {
  constructor(props) {
    super(props);

    this.state = {
      locations: this.props,
      category: ["Restaurant", "Bar"]
    };
    this.filterCategory = this.filterCategory.bind(this);
  }

  filterCategory() {
    const { locations, category } = this.props;
    let filteredLocations = locations.filter(e => {
      return e.category.includes("Bar");
    });
    this.setState({ locations: filteredLocations });
  }

  render() {
    return (
      <div className="category-position">
        <select
          onChange={e => {
            this.filterCategory();
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
