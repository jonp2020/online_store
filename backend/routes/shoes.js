const express = require("express");
const router = express.Router();
const {
  getAllShoes,
  getMensShoes,
  getKidsShoes,
  getWomensShoes,
} = require("../controllers/shoeController");

router.route("/").get(getAllShoes);

router.get("/mens", getMensShoes);

router.get("/womens", getWomensShoes);

router.get("/kids", getKidsShoes);

module.exports = router;
