var express = require("express");
var autenticacaoController = require("../controllers/authController");

var router = express.Router();

router.post("/login", autenticacaoController.login);

router.get("/logout", autenticacaoController.logout);

router.post("/registar", autenticacaoController.registaUtilizador);

router.put("/editarUtilizador", autenticacaoController.updatePassword);

module.exports = router;
