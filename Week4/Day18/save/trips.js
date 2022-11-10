var express = require("express");
var router = express.Router();
const Trip = require("../models/trips");
const moment = require("moment");

/* POST route TRIPS. */

// Première route test  :
router.get("/", (req, res) => {
  Trip.find().then((data) => {
    res.json({ allTrips: data });
  });
});

// 1) Route searcher  : PAGE D'ACCUEIL
router.post("/search", (req, res) => {
  console.log(req.body);

  if (!req.body.departure || !req.body.arrival || !req.body.date) {
    res.json({ result: false, error: "Missing or empty fields" });
    return;
  }

  // const date = moment(req.body.date).format("YYYY-MM-DD");
  // const hour = moment(req.body.date).format("h:mm");
  const date = req.body.date;
  Trip.find({
    departure: req.body.departure,
    arrival: req.body.arrival,
  }).then((data) => {
    // console.log("date", date)
    // console.log(moment(data[2].date).format("YYYY"))
    // console.log(moment(date).format("YYYY"))
    // console.log(moment(data[2].date).format("MM"))
    // console.log(moment(date).format("MM"))
    // console.log(moment(data[2].date).format("DD"))
    // console.log(moment(date).format("DD"))

    if (data) {
      let array = [];
      for (let i = 0; i < data.length; i++) {
        if (
          moment(data[i].date).format("YYYY") === moment(date).format("YYYY") &&
          // Pour moment(date) le format est bien DD à cause de la précédente manipulation liée à l'inversion jours/mois
          moment(data[i].date).format("MM") === moment(date).format("MM") &&
          moment(data[i].date).format("DD") === moment(date).format("DD")
        ) {
          array.push(data[i]);
        }
      }

      // dataFilteredByDate = data.filter((e) =>
      // e.date.getFullYear() === req.body.date.getFullYear() &&
      // e.date.getMonth() === req.body.date.getMonth() &&
      // e.date.getDate() === req.body.date.getDate()
      // );
      // res.json({ result: true, Travel: dataFilteredByDate });

      res.json({ result: true, Travel: array });
    } else {
      res.json({ result: false, error: "Travel not found" });
    }
  });
});

module.exports = router;
