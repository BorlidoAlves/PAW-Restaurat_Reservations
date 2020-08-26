var express = require("express");
var autenticacaoController = require("../controllers/authController");

var router = express.Router();

router.post("/login", autenticacaoController.login);

router.get("/logout", autenticacaoController.logout);

router.post("/register", autenticacaoController.createUser);

router.put("/updateUser/:id", autenticacaoController.updatePassword);

router.post("/deleteUser/:id", autenticacaoController.deleteUser);

module.exports = router;
