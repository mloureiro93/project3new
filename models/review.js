"use strict";

const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 300
    },

    _author: {
      type: mongoose.Schema.Types.ObjectId,
      // required: true,
      ref: "User"
    },

    _shop: {
      type: mongoose.Schema.Types.ObjectId,
      // required: true,
      ref: "Shop"
    },
    image: String,
    userId: String,
    rating: String
  },

  {
    timestamps: true
  }
);

module.exports = mongoose.model("Review", schema);
