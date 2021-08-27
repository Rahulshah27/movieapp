const express = require("express");
const bodyParser = require("body-parser");


const Movies = require("../models/movies");


const movieRouter = express.Router();

movieRouter.use(bodyParser.json());

movieRouter
  .route("/")
  .get((req, res, next) => {
    Movies.find(req.query)
      .then(
        (movies) => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(movies);
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  })
  .post(
    (req, res, next) => {
      Movies.create(req.body)
        .then(
          (movie) => {
            console.log("Movie Created ", movie);
            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json");
            res.json(movie);
          },
          (err) => next(err)
        )
        .catch((err) => next(err));
    }
  )
  .put(
    (req, res, next) => {
      res.statusCode = 403;
      res.end("PUT operation not supported on /movies");
    }
  )
  .delete(
    (req, res, next) => {
      Movies.remove({})
      res.statusCode = 403;
      res.end("Delete operation not supported on /movies");
    }
  );

movieRouter
  .route("/:movieId")
  .get((req, res, next) => {
    Movies.findById(req.params.movieId)
      .then(
        (Movie) => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(Movie);
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  })
  .post(
    (req, res, next) => {
      res.statusCode = 403;
      res.end("POST operation not supported on /movies/" + req.params.movieId);
    }
  )
  .put(
    (req, res, next) => {
      Moviees.findByIdAndUpdate(
        req.params.movieId,
        {
          $set: req.body,
        },
        { new: true }
      )
        .then(
          (Movie) => {
            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json");
            res.json(Movie);
          },
          (err) => next(err)
        )
        .catch((err) => next(err));
    }
  )
  .delete(
    (req, res, next) => {
      Moviees.findByIdAndRemove(req.params.movieId)
        .then(
          (resp) => {
            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json");
            res.json(resp);
          },
          (err) => next(err)
        )
        .catch((err) => next(err));
    }
  );


module.exports = movieRouter;