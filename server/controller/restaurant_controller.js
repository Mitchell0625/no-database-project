const axios = require("axios");

let restaurants = [];
let id = 0;

module.exports = {
  addRestaurant: (req, res, next) => {
    const { name } = req.body;
    const { address, postalCode } = req.body.location;

    let restaur = {
      id: id,
      name: name,
      address: address,
      postalCode: postalCode
    };
    restaurants.push(restaur);
    id++;
    res.send(restaurants);
  },

  getRestaurants: (req, res, next) => {
    console.log("getting locations");
    if (!restaurants.length) {
      axios
        .get(
          `https://api.foursquare.com/v2/venues/search?near=dallas&categoryId=4bf58dd8d48988d1c4941735&client_id=${
            process.env.CLIENT_ID
          }&client_secret=${process.env.CLIENT_SECRET}&v=20180323`
        )
        .then(resp => {
          console.log(resp.data.response.venues);
          restaurants = resp.data.response.venues;
          res.status(200).json(restaurants);
        })
        .catch(() => console.log("Failed to get restaurants"));
    } else {
      res.status(200).json(restaurants);
    }
  },

  updateRestaurant: (req, res, next) => {
    const { name, id } = req.body;
    const { address, postalCode } = req.body.location;
    restaurants.forEach((el, ind, arr) => {
      if (el.id === id) {
        el.name = name;
      }
    });
    res.status(200).json(restaurants);
  }
  // deleteRestaurant: (req, res, next) => {
  //   const { id } = req.body;
  //   if()
  //   restaurants.splice(id, 1);
  // }
};
