const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  abc: String,
  bcd: String,
  efg: String,
});

module.exports = mongoose.model("tempp", UserSchema);
