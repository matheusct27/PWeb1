var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send(`Acesso à rota 'root' ${req.requestTime}`);
});

module.exports = router;