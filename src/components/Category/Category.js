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

  filterCategory(val) {
    const { locations } = this.props;
    let filteredLocations = locations.filter((e, i) => {
      return e.categories[0].name.includes(val);
    });
    this.setState({ locations: filteredLocations });
  }

  render() {
    return (
      <div className="category-position">
        <select
          onChange={e => {
            this.filterCategory(e.target.value);
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
