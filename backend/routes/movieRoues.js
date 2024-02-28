const router = require("express").Router();
const Movie = require("../models/Movie");

// Route to add a new movie
router.post("/newmovie", (req, res) => {
  const newMovie = new Movie(req.body);

  newMovie.save().then((data) => {
    return res.send({
      message: "Movie Added Successfully",
      success: true,
      data,
    });
  }).catch((err) => {
    return res.status(500).send({
      message: "Failed to add movie",
      success: false,
      error: err.message
    });
  });
});

// Export the router
module.exports = router;
