var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send(`Acesso à rota '/about' ${req.requestTime}`);
});

module.exports = router;