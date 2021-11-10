const router = require('express').Router();
const Workout = require('../models/Workout')
const apiRoutes = require('./api');
const htmlRoutes = require('./htmlRoutes');

router.use('/', htmlRoutes);
router.use('/api', apiRoutes);


router.get('/api/workouts/range', (req, res)=> {
  console.log('range')
  Workout.aggregate([{ $addFields: { totalDuration: { $sum: '$exercises.duration', }, }, },
])
  // .sort({ _id: -1})
  .limit(7)
  .then(workouts => {
    console.log(workouts)
    res.json(workouts);
  })
  .catch(err => {
    res.json(err);
  });
});
module.exports = router;