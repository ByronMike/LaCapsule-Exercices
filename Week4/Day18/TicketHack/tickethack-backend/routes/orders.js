var express = require("express");
var router = express.Router();
const Order = require("../models/orders");
const Trip = require("../models/trips");
const moment = require("moment");

// Première route test  :
router.get("/", (req, res) => {
  Order.find().then((data) => {
    res.json({ tripcart: data });
  });
});

router.post("/add", (req, res) => {
  Trip.find({
    date: req.body.date,
  }).then((data) => {
    if (
      data
      //   data.some(
      //     (e) =>
      //       e.departure.toLowerCase() === req.body.departure.toLowerCase() &&
      //       e.arrival.toLowerCase() === req.body.arrival.toLowerCase() &&
      //       e.date === req.body.date
      //   )
    ) {
      const newOrder = new Order({
        departure: data[0].departure,
        arrival: data[0].arrival,
        date: data[0].date,
        price: data[0].price,
        isPaid: false,
      });
      newOrder.save().then((newDoc) => {
        res.json({ result: true, Commande: newDoc });
      });
    } else {
      res.json({ result: false, error: "Book error" });
    }
  });
});

module.exports = router;
