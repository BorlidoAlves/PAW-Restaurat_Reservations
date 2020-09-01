var express = require("express");
var restConfController = require("../controllers/restConfController");

var router = express.Router();

router.post("/createConf", restConfController.createRestConf);

router.get("/getTimeReserv", restConfController.getTimeReserv);

module.exports = router;