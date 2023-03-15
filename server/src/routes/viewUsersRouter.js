const express = require("express");
const viewUsersRouter = express.Router();
const users = require("../models/registerModel");

viewUsersRouter.get("/", (req, res) => {
  users.find({username:"vijay"}).then((data) => {
    console.log("all Users>>>>", data);

    return res.status(400).json({
      success: true,
      error: false,
      data: data,
    });
  });
});

module.exports = viewUsersRouter;
