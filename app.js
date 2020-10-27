const express = require("express");
const mongoose = require("mongoose");

const app = express();
const bodyParser = require("body-parser");

//Importing the custom routes for user and order
const orderRoutes = require("./routes/orders");
const userRoutes = require("./routes/users");

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/origa.ai/api", orderRoutes);
app.use("/origa.ai/api", userRoutes);

// app.use("/", (req, res, next) => {
//   console.log("Home Page");
//   res.send("Home page");
// });
mongoose
  .connect(
    "mongodb+srv://origa-ai-user:origa.ai-backend-password@cluster0.bj5km.mongodb.net/origa-ai-database?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then((result) => {
    console.log("Connected");
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });
