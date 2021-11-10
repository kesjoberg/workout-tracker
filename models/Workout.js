const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  type: {
    type: String,
    required: true
  },
  name: {
    type: String,
    trim: true,
    required: true
  },
 duration: {
    type: Number,
    required: true
  },
  weight: {
    type: Number,
    required: true
  },
  reps: {
    type: Number,
    required: true
  },
  sets: {
    type: Number,
    required: true
  },
  distance: {
    type: Number, 
    required: false
  },
  date: Date.now,
});



const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;