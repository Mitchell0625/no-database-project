const axios = require("axios");

let locations = [];
let id = 0;

module.exports = {
  addLocation: (req, res) => {
    console.log(req.body);
    const { name, address, city, state } = req.body;

    let loc = {
      id: id,
      name: name,
      location: {
        address: address,
        city: city,
        state: state
      }
    };
    locations.push(loc);
    id++;
    res.status(200).json(locations);
  },

  getLocations: (req, res, next) => {
    console.log("getting locations");
    if (!locations.length) {
      axios
        .get(
          `https://api.foursquare.com/v2/venues/search?near=dallas&categoryId=4bf58dd8d48988d1d3941735,4bf58dd8d48988d116941735&client_id=${
            process.env.CLIENT_ID
          }&client_secret=${process.env.CLIENT_SECRET}&v=20180323`
        )
        .then(resp => {
          console.log(resp.data.response.venues);
          locations = resp.data.response.venues;
          res.status(200).json(locations);
        })
        .catch(() => console.log("Failed to get locations"));
    } else {
      res.status(200).json(locations);
    }
  },

  updateLocation: (req, res, next) => {
    const { name, id } = req.body;

    locations.forEach((el, ind, arr) => {
      if (el.id === id) {
        el.name = name;
      }
    });
    res.status(200).json(locations);
  },

  deleteLocation: (req, res, next) => {
    console.log(req.params);
    const { id } = req.params;
    let index = locations.findIndex(e => e.id === id);
    locations.splice(index, 1);
    res.status(200).json(locations);
  }
};
