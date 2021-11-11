const router = require("express").Router();
const Workout = require("../../models/Workout");


//Gets all workouts
router.get("/", (req, res) => {
  Workout.aggregate([{ $addFields: { totalDuration: { $sum: '$exercises.duration', }, }, },
    ])
  .then(data => {
    // console.log(data)
    res.json(data);
  })
  .catch(err => {
    res.json(err);
  });
});

// Gets data for the range
router.get('/range', (req, res)=> {
 
  Workout.aggregate([{ $addFields: { totalDuration: { $sum: '$exercises.duration' }, }, },
])
  // .sort({ _id: -1})
  // .limit(7)
  .then(data => {
    res.json(data);
  })
  // .catch(err => {
  //   res.json(err);
  // });
});

//Creates a new workout
router.post("/", (req, res) => {
  console.log()
  Workout.create({})
    .then(newEntry => {
      // console.log(newEntry);
      res.json(newEntry);
    })
    .catch(err => {
      res.json(err);
    });
});

//Updates an existing workhout
router.put("/:id", (req, res) => {
  Workout.findByIdAndUpdate(
    {_id: req.params.id},
    {$push: {exercises: req.body}},
    { new: true}
  )
  .then(updatedEntry => {
    console.log(updatedEntry)
    res.json(updatedEntry);
  })
  .catch(err => {
    res.json(err);
  });
});


module.exports = router;