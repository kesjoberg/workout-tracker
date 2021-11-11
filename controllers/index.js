const router = require('express').Router();
const Workout = require('../models/Workout')
const apiRoutes = require('./api');
const htmlRoutes = require('./htmlRoutes');

router.use('/', htmlRoutes);
router.use('/api', apiRoutes);



module.exports = router;