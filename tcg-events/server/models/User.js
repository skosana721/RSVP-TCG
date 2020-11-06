const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  surname: {
    type: String, 
    required: true
  },
  email: {
    type: String,
    required: true,
  },
  eventName: {
    type: String,
    required: true
  },
  dietRequirements: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  }
  
});

module.exports = User = mongoose.model('User ', UserSchema)