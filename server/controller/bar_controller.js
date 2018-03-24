const axios = require("axios");

let bars = [];
let id = 0;

module.exports = {
  addBar: (req, res, next) => {
    const { name, id } = req.body;
    const { address, postalCode } = req.body.location;

    let newBar = {
      id: id,
      name: name,
      address: address,
      postalCode: postalCode
    };
    id++;
    bars.push(newBar);
    res.send(bars);
  },

  getBars: (req, res, next) => {
    console.log("getting bars");
    if (!bars.length) {
      axios
        .get(
          `https://api.foursquare.com/v2/venues/search?near=dallas&categoryId=4bf58dd8d48988d116941735&client_id=${
            process.env.CLIENT_ID
          }&client_secret=${process.env.CLIENT_SECRET}&v=20180323`
        )
        .then(resp => {
          console.log(resp.data.response.venues);
          bars = resp.data.response.venues;
          res.status(200).json(bars);
        })
        .catch(() => console.log("Failed to get bars"));
    } else {
      res.status(200).json(bars);
    }
  } //,

  //   updateBar: (req, res, next) => {
  //     const { name, id } = req.body;
  //     const { address, postalCode } = req.body.location;
  //     axios.put(`/api/bars/${id}`);
  //   },
  //   deleteBar: (req, res, next) => {}
  // };
};
