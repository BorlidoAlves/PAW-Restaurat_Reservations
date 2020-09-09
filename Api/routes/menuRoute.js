var express = require("express");
var menuController = require("../controllers/menuController");
var autenticacaoController = require("../controllers/authController");

var router = express.Router();

router.post("/createMenu", menuController.createMenu, autenticacaoController.verifyToken);

router.delete("/deleteMenu/:id", menuController.deleteMenu, autenticacaoController.verifyToken);

router.get("/listMenu", menuController.listMenu, autenticacaoController.verifyToken);

router.put("/updateMenu/:id", menuController.updateMenu, autenticacaoController.verifyToken);

router.get("/getMenu/:id", menuController.getMenu, autenticacaoController.verifyToken);

module.exports = router;