const router = require("express").Router();
const Workout = require("../models/exerciseModel");
const db = require("../models");

router.get("/api/workouts", (req, res) => {
    db.Workout.find({})
        .then(dbWorkouts => {
            res.json(dbWorkouts);
        })
        .catch(err => {
            res.json(err);
        });
});

router.put("/api/workouts/:id", ({ body, params }, res) => {

        console.log("body");

        console.log({ body, params } );
        db.Workout.findByIdAndUpdate(
            params.id,
            { $push: { exercises: body } }

        )
        .then(dbWorkouts => {
            res.json(dbWorkouts);
        })
        .catch(err => {
            res.json(err);
        })
    });

router.post("/api/workouts", (req, res) => {
    db.Workout.create({
        day: Date.now()
    })
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
});

router.get("/api/workouts/range", (req, res) => {
    Workout.find({})
        .then(dbWorkouts => {
            res.json(dbWorkouts);
        })
        .catch(err => {
            res.json(err);
        });
});

router.delete("/api/workouts", ({ body }, res) => {
    Workout.findByIdAndDelete(body.id)
        .then(() => {
            res.json(true);
        })
        .catch(err => {
            res.json(err);
        });
});

module.exports = router;