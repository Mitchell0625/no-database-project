require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const port = 3001;
const loc = require("./controller/location_controller");
const app = express();

app.use(bodyParser.json());

app.get("/api/locations", loc.getLocations);
app.post("/api/locations", loc.addLocation);
app.put("/api/locations/:id/:name", loc.updateLocation);
app.delete("/api/locations/:id", loc.deleteLocation);
app.post("/api/saved/:id", loc.addToPlaces);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
