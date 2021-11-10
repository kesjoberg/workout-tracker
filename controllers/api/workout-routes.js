const router = require("express").Router();
const Workout = require("../../models/Workout");

//Gets all workouts
router.get("/", (req, res) => {
  Workout.find({})
  .then(data => {
    res.json(data);
  })
  .catch(err => {
    res.json(err);
  });
});

// Gets a specific workout
router.get("/:id", (req, res) => {
  Workout.findOne({_id: req.params.id})
  .then(data => {
    res.json(data);
  })
  .catch(err => {
    res.json(err);
  });
});

//Creates a new workout
router.post("/", ({ body }, res) => {
  Workout.create(req.body)
    .then(newEntry => {
      res.json(newEntry);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

//Updates an existing workhout
router.put("/:id", (req, res) => {
  Workout.findOneaAndUpdate(
    {_id: req.params.id},
    req.body,
    { new: true}
  )
  .then(updatedEntry => {
    res.json(updatedEntry);
  })
  .catch(err => {
    res.json(err);
  });
});

module.exports = router;