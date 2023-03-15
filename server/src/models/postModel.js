const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://nandakishor:nandakishor@cluster0.tvvwvil.mongodb.net/socialmedia?retryWrites=true&w=majority"
);
const Schema = mongoose.Schema;

const PostsSchema = new Schema({
  userId: { type: String },
  post: { type: String },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
  likes:{type:Number,default:0},
});

const posts = mongoose.model("posts", PostsSchema);

module.exports = posts;
