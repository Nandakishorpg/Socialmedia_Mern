const express = require("express");
const userRegisterRouter = express.Router();
const bcrypt = require("bcryptjs");
const reg_doc = require("../models/registerModel");

userRegisterRouter.post("/", (req, res) => {
  console.log("UserData>>>", req.body);

  bcrypt.hash(req.body.password, 10,async (err, hashedPass) => {
    if (err) {
      return res.sendStatus(400).json({
        success: false,
        error: true,
        message: "password hashing error",
      });
    } else {
      const userRegister_data = {
        username: req.body.username,
        email: req.body.email,
        password: hashedPass,
      };

    await reg_doc.findOne({$or: [{ username: userRegister_data.username }, { email: userRegister_data.email }] }).then((nameOrEmail) => {
        // console.log(nameOrEmail);
        if (nameOrEmail) {
          console.log("user/email already registered");
          return res.status(400).json({
            success: false,
            error: true,
            message: "user name/email already registered",
          });
        }else{

          const register_item = reg_doc(userRegister_data);

          console.log("regData", userRegister_data);

          register_item
            .save()
            .then(() => {
              return res.status(200).json({
                success: true,
                error: false,
                message: "registration completed",
              });
            })
            .catch((err) => {
              res.status(401).json({
                success: false,
                error: true,
                data: err,
                message: "something went wrong",
              });
            });

        }
      });

   


     
    }
  });
});

module.exports = userRegisterRouter;
