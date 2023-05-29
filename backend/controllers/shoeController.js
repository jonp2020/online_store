const asyncHandler = require("express-async-handler");

const getAllShoes = asyncHandler(async (req, res) => {
  const shoes = { shoes: "shoes example 1" };

  res.status(200).json(shoes);
});

module.exports = {
  getAllShoes,
};
