const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    type: {
        type: String,
        trim: true,
        required: "Enter the type of workout"
    },
    name: {
        type: String,
        trim: true,
        required: "Enter a name for the exercise"
    },
    weight: {
        type: Number,
        required: "Enter the weight used in the workout"
    },
    reps: {
        type: Number,
        required: "Enter the amount of reps completed"
    },
    duration: {
        type: Number,
        required: "Enter the length of the time of the exercise"
    }
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;