const mongoose = require('mongoose');
const { Schema } = mongoose;

const users = new Schema({
  _id : String,
  name : String,
  money : Number,
  limited : Number
});

module.exports = mongoose.model('userSchema', users);