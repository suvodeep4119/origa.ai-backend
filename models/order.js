const mongoose = require("mongoose");
const User = require("./user");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  userId: {
    type: Number,
    ref: User,
  },
  subTotal: {
    type: Number,
    required: [true, "sub total required"],
  },
  date: {
    type: Date,
    required: [true, "date required"],
  },
});

module.exports = mongoose.model("Order", orderSchema);
