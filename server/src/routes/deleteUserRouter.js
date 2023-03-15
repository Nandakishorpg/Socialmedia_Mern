const express = require("express");
const deleteUserRouter = express.Router();
const users = require("../models/registerModel");

deleteUserRouter.delete("/:id", (req, res) => {
  const userId = req.params.id;

  console.log("userId>>>", userId);

  users.findByIdAndDelete({ _id: userId }).then((data) => {

    console.log(` data of ${data.username} sucessfully deleted`);
    return res.status(200).json({
      succes: true,
      error: false,
      message: "user deleted succesfully",
    });
  }).catch(()=>{
    return res.status(400).json({
        succes:false,
        error:true,
        data:err
    })
  })
});

module.exports = deleteUserRouter;
