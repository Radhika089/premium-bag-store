const mongoose = require("mongoose");
const dbgr = require("debug")("development: mongoose");

mongoose
  .connect(process.env.DB_URL)
  .then(function () {
    dbgr("Connected");
  })
  .catch(function (err) {
    dbgr(err);
  });

module.exports = mongoose.connection;
