const express = require("express");
const profileRoutes = express.Router();

const {getprofile,getprofileupdate} = require("../Controllers/profile")

profileRoutes.post("/profile",getprofile);
profileRoutes.post("/profileupdate", getprofileupdate);



module.exports = profileRoutes;