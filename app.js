const express = require("express");
const app = express();

const path = require("path");
const cookie = require("cookie-parser");

const db = require("./config/mongoose-connection");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.send("hi");
});

app.listen(5000);
