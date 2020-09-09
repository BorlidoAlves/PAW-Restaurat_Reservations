var Menu = require("../models/Ementa");

var menuController = {};

menuController.createMenu = function(req, res){

    Menu.create({
        appetizer: req.body.appetizer,
        mainCourse: req.body.mainCourse,
        soup: req.body.soup,
        dessert: req.body.dessert,
        price: req.body.price
    }, function(err){
        if(err) return res.status(400).send(err);

        res.status(200).send("Ementa criado");
    });
};

menuController.deleteMenu = function(req, res){

    Menu.findByIdAndDelete({_id: req.params.id}, function(err){
        if(err) return res.status(400).send("Não foi possível eliminar");

        res.status(200).send("Eliminado com sucesso !");
    });
}

menuController.updateMenu = function(req, res){

    Menu.findByIdAndUpdate({_id: req.params.id}, {$set:{appetizer: req.body.appetizer, mainCourse: req.body.mainCourse, soup: req.body.soup, dessert: req.body.dessert, price: req.body.price}}, function(err){
        
        if(err) return res.status(400).send("Não foi possível atualizar");

        res.status(200).send("Atualizado com sucesso !");
    });
}

menuController.listMenu = function(req, res){

    Menu.find({}, function(err, menu){
        if(err) return res.status(400).send("Não foi possível listar o Menu");

        res.json(menu);
    });
}

menuController.getMenu = function(req, res){
    Menu.findById({_id: req.params.id}, function(err, menu){
        if(err) return res.status(400).send(err);

        res.json(menu);
    });
}

module.exports = menuController;