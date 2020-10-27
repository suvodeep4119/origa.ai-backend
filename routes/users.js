const express = require("express");
const router = express.Router();

const userLogicController = require("../controllers/user-logic");

router.get("/user-related-details", userLogicController.userLogic);

module.exports = router;
