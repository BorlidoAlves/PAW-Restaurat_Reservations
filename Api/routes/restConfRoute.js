var express = require("express");
var restConfController = require("../controllers/restConfController");
var autenticacaoController = require("../controllers/authController");

var router = express.Router();

router.post("/createConf", restConfController.createRestConf, autenticacaoController.verifyToken);

router.get("/getTimeReserv", restConfController.getTimeReserv, autenticacaoController.verifyToken);

module.exports = router;