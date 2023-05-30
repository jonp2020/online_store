const asyncHandler = require("express-async-handler");
const Shoe = require("../models/shoeModel");

const getAllShoes = asyncHandler(async (req, res) => {
  console.log("here in get all shoes");
  try {
    const shoes = await Shoe.find();
    res.status(200).json(shoes);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = {
  getAllShoes,
};
