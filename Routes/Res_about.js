const express = require("express");
const aboutRoutes = express.Router();

const {getabout,getaboutupdate,getfeatureupdate,getitemupdate,getimageupdate} = require("../Controllers/Restaurant/About");


aboutRoutes.post("/about",getabout);
aboutRoutes.post("/aboutupdate",getaboutupdate);
aboutRoutes.post("/featureupdate",getfeatureupdate);
aboutRoutes.post("/itemupdate",getitemupdate);
aboutRoutes.post("/imageupdate",getimageupdate);


module.exports = aboutRoutes;