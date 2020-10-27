const e = require("express");
const order = require("../models/order");
const Order = require("../models/order");
const User = require("../models/user");

exports.orderLogic = async (req, res, next) => {
  try {
    const users = await User.find();
    const orders = await Order.find();
    var arrayOfUsersAfterCalculation = [];
    users.forEach((user) => {
      console.log(user);
      var averageBillSubTotalCounter = 0;
      const orderArr = orders.filter((order) => {
        return order.userId == user.userId;
      });

      orderArr.forEach((newOrder) => {
        averageBillSubTotalCounter =
          averageBillSubTotalCounter + newOrder.subTotal;
      });
      averageBillSubTotalCounter = Math.floor(
        averageBillSubTotalCounter / orderArr.length
      );
      arrayOfUsersAfterCalculation.push({
        userId: user.userId,
        name: user.name,
        noOfOrders: orderArr.length,
        averageBillSubTotalCounter,
      });
    });

    res.json(arrayOfUsersAfterCalculation);
  } catch (error) {
    console.log("error", error);
    res.json({ message: error });
  }
};
