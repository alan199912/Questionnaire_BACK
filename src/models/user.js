const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  username: {
    type: String,
    require: true,
    unique: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  status: {
    type: Number,
    default: 0,
  },
});

module.exports = model("User", UserSchema);
