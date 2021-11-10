const router = require("express").Router();
const path = require("path");



//Homepage route
router.get('/', (req,res) => {
  res.sendFile(path.join(__dirname + "../../public/index.html"));
});

//Exercise route
router.get('/exercise', (req, res) =>{
  res.sendFile(path.join(__dirname + "../../public/exercise.html"));
});

// Stats router
router.get('/stats', (req, res) =>{
  res.sendFile(path.join(__dirname + "../../public/stats.html"));
});

module.exports = router;