const mongoose = require("mongoose");

const movieSchema = mongoose.Schema(
  {
    Name: {
      type: String,
      required: true,
    },
    Director: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    Genre: {
      type: String,
      required: true,
    },
  
    language: {
      type: String,
    },
  },
  { timestamps: true }
);

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
