const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/LuxeCarry")
  .then(function () {
    console.log("Connected");
  })
  .catch(function (err) {
    console.error(err);
  });

module.exports = mongoose.connection;
