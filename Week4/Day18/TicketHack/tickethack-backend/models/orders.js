const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  departure: String,
  arrival: String,
  date: Date,
  price: Number,
  isPaid: Boolean,
});

const Order = mongoose.model("orders", orderSchema);

module.exports = Order;
