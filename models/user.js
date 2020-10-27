const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  userId: {
    type: Number,
    unique: true,
  },
  name: {
    type: String,
    required: [true, "user name required"],
  },
  noOfOrders: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("User", userSchema);
