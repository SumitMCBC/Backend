const express = require("express");
const addResRoutes = express.Router();

const {addRestaurant,isAdded} = require("../Controllers/Restaurant/addRestaurant")
// const  = require("../Controllers/Restaurant/addRestaurant")


addResRoutes.post("/addRes",addRestaurant);
addResRoutes.post("/isAdded",isAdded);



module.exports = addResRoutes;