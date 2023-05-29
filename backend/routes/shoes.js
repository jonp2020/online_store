const express = require("express");
const router = express.Router();
const { getAllShoes } = require("../controllers/shoeController");

router.route("/").get(getAllShoes);

module.exports = router;
