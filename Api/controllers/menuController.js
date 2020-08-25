var Menu = require("../models/Ementa");

var menuController = {};

menuController.createMenu = function(req, res){

    Menu.create({
        nomePrato: req.body.nomePrato,
        confecao: req.body.confecao,
        dose: req.body.dose,
        meiaDose: req.body.meiaDose
    }, function(err){
        if(err) return res.status(400).send("Não foi possivel gravar o prato");

        res.status(200).send("Prato criado");
    });
};

menuController.deleteMenu = function(req, res){

    Menu.findByIdAndDelete({_id: req.params.id}, function(err){
        if(err) return res.status(400).send("Não foi possível eliminar");

        res.status(200).send("Eliminado com sucesso !");
    });
}

menuController.updateMenu = function(req, res){

    console.log(req.params.id);
    Menu.findByIdAndUpdate({_id: req.params.id}, {$set:{nomePrato: req.body.nomePrato, confecao: req.body.confecao, dose: req.body.dose, meiaDose: req.body.meiaDose}}, function(err){
        
        if(err) return res.status(400).send("Não foi possível atualizar");

        res.status(200).send("Atualizado com sucesso !");
    });
}

module.exports = menuController;