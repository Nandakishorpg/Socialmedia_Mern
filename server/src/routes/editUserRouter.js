const express = require("express");
const editUserRouter = express.Router();
const reg_doc = require("../models/registerModel");

const bcrypt = require("bcryptjs");

editUserRouter.put("/:id", (req, res) => {
  const userId = req.params.id;
  const uName = req.body.username;
  // const uPass = req.body.password;

  bcrypt.hash(req.body.password, 10, async (err, hashedpass) => {
    console.log("hashedpass",hashedpass);
    if (err) {
      return res.status(400).json({
        succes: false,
        error: true,
        message: "password hashing error",
      });
    }

  await  reg_doc
      .findByIdAndUpdate(
        { _id: userId },
        { $set: { username: uName, password: hashedpass } },
        {
          new: true,
        }
      )
      .then((data) => {
        res.status(200).json({
          succes: true,
          error: false,
          message: "user details updated",
        });
        console.log(">>>>>>>>>>>>>>>>", data);
      })
      .catch((err) => {
        console.log("error>>>>>>", err);
      });
  });

  // console.log(`new username is ${uName}`);

  // console.log("userIdIs>>>>", userId);
});

module.exports = editUserRouter;
