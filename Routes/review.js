const express = require("express");
const reviewRoutes = express.Router();


const {getreview,getuser,getreviewpost} = require("../Controllers/Restaurant/reviews");


reviewRoutes.post("/review",getreview);
reviewRoutes.post("/user",getuser);
reviewRoutes.post("/reviewpost",getreviewpost);


module.exports = reviewRoutes;