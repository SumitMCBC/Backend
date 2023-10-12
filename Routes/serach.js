const express = require("express");
const searchRoutes = express.Router();

const {getRestaurantByName,getRestaurantByLocation} = require("../Controllers/search")


searchRoutes.post("/byName",getRestaurantByName);
searchRoutes.post("/byLocation", getRestaurantByLocation);


module.exports = searchRoutes;
