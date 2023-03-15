const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://nandakishor:nandakishor@cluster0.tvvwvil.mongodb.net/socialmedia?retryWrites=true&w=majority"
);
const Schema = mongoose.Schema;

const userRegistrationSchema  = new Schema({
  username: { type: String,required: true  },
  email: { type: String, required: true,unique:true},
  password: { type: String,required: true  },
  created_at: {type: Date,default: Date.now},
  updated_at: {type: Date,default: Date.now},
  
});
const userRegistration = mongoose.model("userRegistration", userRegistrationSchema);
module.exports = userRegistration;
