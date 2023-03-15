const express = require("express");
const editUserRouter = express.Router();
const bcrypt = require("bcryptjs");
const regUser = require("../models/registerModel");

editUserRouter.post("/", async (req, res) => {
  const userName = req.body.username;

  console.log("username>>>", userName);
  await regUser
    .findOne({ username: userName })
    .then((user) => {
      if (!user) {
        console.log("check login credentials");
        return res.status(400).json({
          success: false,
          error: true,
          message: "user not found",
        });
      } else {
      
        return bcrypt
          .compare(req.body.password, user.password)
          .then((result) => {
            console.log(" password is", result)
            if (!result) {
              console.log("checkpassword");
              return res.status(401).json({
                success: false,
                error: true,
                message: "please check password",
              });
            } else {
              console.log(`${userName} logged in`);

              return res.status(401).json({
                success: true,
                error: false,
                message: "user logged in",
              });
            }
          });
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = editUserRouter;
