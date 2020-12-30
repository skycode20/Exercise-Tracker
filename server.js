const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

// const Workout = require("./models/exerciseModel.js");
const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true
});

// routes
app.use(require("./routes/api.js"));
app.use(require("./routes/view.js"));

// app.post("/submit", ({ body }, res) => {
//     Workout.create(body)
//         .then(dbUser => {
//             res.json(dbUser);
//         })
//         .catch(err => {
//             res.json(err);
//         });
// });

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});
