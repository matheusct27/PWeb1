var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send(`Acesso à rota '/users' ${req.requestTime}`);
});

module.exports = router;