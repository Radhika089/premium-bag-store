const express = require("express");
const router = express.Router();

const ownerModel = require("../models/owner");

router.get("/", function (req, res) {
  res.send("hey");
});

if (process.env.NODE_ENV === "development") {
  router.post("/create", async function (req, res) {
    let owner = await ownerModel.find();

    if (owner.length > 0) {
      return res
        .status(504)
        .send("You don't have permission to create a new owner");
    }
    const { fullName, email, password } = req.body;
    const createdOwner = await ownerModel.create({
      fullName,
      email,
      password,
    });

    res.status(201).send(createdOwner);
  });
}

module.exports = router;
