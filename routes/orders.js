const express = require("express");
const router = express.Router();

const orderLogicController = require("../controllers/order-logic");

router.get("/order-related-details", orderLogicController.orderLogic);

module.exports = router;
