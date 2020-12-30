const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    
        day: {
            type: Date,
            default: Date.now,
            required: true
        },
        exercises: [
            {
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
            duration: {
                type: Number,
                required: "Enter the length of the time of the exercise"
            },
            weight: {
                type: Number,
                required: "Enter the weight used in the workout"
            },
            sets: {
                type: Number,
                required: "Enter the amount of sets performed"
            },
            reps: {
                type: Number,
                required: "Enter the amount of reps completed"
            },
            distance: {
                type: Number,
                required: "Enter the distance traveled during the exercise"
            }
        }
    ]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;