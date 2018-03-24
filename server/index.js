require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const port = 3001;
const restaurants = require("./controller/restaurant_controller");
const bars = require("./controller/bar_controller");
const app = express();

app.use(bodyParser.json());

app.get("/api/restaurants", restaurants.getRestaurants);
app.post("/api/restaurants", restaurants.addRestaurant);
app.put("/api/restaurants", restaurants.updateRestaurant);
// app.delete("/api/restaurants", restaurants.deleteRestaurant);
app.get("/api/bars", bars.getBars);
app.post("/api/bars", bars.addBar);
//app.put("/api/bars", bars.updateBars);
// app.delete("/api/bars", bars.deleteBar);
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
