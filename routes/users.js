var express = require('express');
var router = express.Router();
var people = require("../people.json");

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get("/", (req, res) => {
  res.render("users", {
    title: "Homepage",
    people: people.profiles
  });
});

module.exports = router;
