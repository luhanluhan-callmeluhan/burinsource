const mongoose = require('mongoose');
const { Schema } = mongoose;

const samples = new Schema({
  id: String,
  name : String
});

module.exports = mongoose.model('samplesSchema', samples);