const express = require("express");
const queryRoutes = express.Router();

const getquery = require("../Controllers/contact")

queryRoutes.post("/contact",getquery);




module.exports = queryRoutes;