const axios = require("axios");

let locations = [];
let id = 0;

module.exports = {
  addLocation: (req, res) => {
    const { name } = req.body;

    let location = {
      id: id,
      name: name,
      address: req.body.location,
      city: req.body.location,
      state: req.body.location
    };
    locations.push(location);
    id++;
    res.status(200).send(locations);
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
    const { address, postalCode } = req.body.location;
    locations.forEach((el, ind, arr) => {
      if (el.id === id) {
        el.name = name;
      }
    });
    res.status(200).json(locations);
  }
  // deleteRestaurant: (req, res, next) => {
  //   const { id } = req.body;
  //   if()
  //   restaurants.splice(id, 1);
  // }
};
