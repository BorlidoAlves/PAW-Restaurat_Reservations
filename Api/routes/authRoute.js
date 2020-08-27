var express = require("express");
var autenticacaoController = require("../controllers/authController");

var router = express.Router();

router.post("/login", autenticacaoController.login);

router.get("/logout", autenticacaoController.logout, autenticacaoController.verifyToken);

router.post("/register", autenticacaoController.createUser);

router.put("/updateUser/:userId", autenticacaoController.updatePassword, autenticacaoController.verifyToken);

router.post("/deleteUser/:userId", autenticacaoController.deleteUser);

router.param("userId", autenticacaoController.getUserId);

module.exports = router;
