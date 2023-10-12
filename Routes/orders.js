const express = require("express");
const orderRoutes = express.Router();

const {getorders, placeOrder,updateorder} = require("../Controllers/order")


orderRoutes.post("/order",getorders);
orderRoutes.post("/placeorder",placeOrder);
orderRoutes.post("/updateorder",updateorder);




module.exports = orderRoutes;