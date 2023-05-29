const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const shoeSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    colours: [String],
    price: {
      type: Number,
      required: true,
    },
    featured: {
      type: Number,
      required: true,
    },
    sizes_availability: {
      type: Object,
      required: true,
    },
    imageURL: {
      type: Object,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Shoe", shoeSchema);
