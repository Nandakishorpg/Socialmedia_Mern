const express = require("express");
const postRouter = express.Router();

const posts_doc = require("../models/postModel");

////post Posts>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>..

postRouter.post("/:id", (req, res) => {
  const fetchedId = req.params.id;

  const postData = req.body.post;

  if (fetchedId) {
    const userPost = {
      userId: fetchedId,
      post: postData,
      likes: req.body.likes,
    };

    const userPost_item = posts_doc(userPost);

    userPost_item.save().then((posted) => {
      return res.status(200).json({
        succes: true,
        error: false,
        message: "user posted successfully",
      });
      console.log("User Posted");
    });

    console.log(userPost);
  }
});

//////Increase Likes>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.

postRouter.put("/like/:id", (req, res) => {
  const postId = req.params.id;

  console.log(`Post id Is>>${postId}`);

  if (postId) {
    posts_doc
      .findByIdAndUpdate({ _id: postId }, { $inc: { likes: 1 } }, { new: true })
      .then((result) => {
        console.log(`Likes Updated to ${result.likes}  likes`);

        return res.status(400).json({
          success: true,
          error: false,
          message: " Post liked and likes updated",
        });
      });
  }
});

//disLike Post>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

postRouter.put("/dislike/:id", (req, res) => {
  const postId = req.params.id;

  console.log(`Post id Is>>${postId}`);

  if (postId) {
    posts_doc
      .findByIdAndUpdate(
        { _id: postId },
        { $inc: { likes: -1 } },
        { new: true }
      )
      .then((result) => {
        console.log(`Likes Updated to ${result.likes}  likes`);

        return res.status(400).json({
          success: true,
          error: false,
          message: " post Disliked and likes updated ",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
});

module.exports = postRouter;
