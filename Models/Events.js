const mongoose = require('mongoose');
const eventSchema = new mongoose.Schema({
  id: Number,
  name: String,
  date: String,
  location: String,
  description: String
});

module.exports = mongoose.model('Event', eventSchema);