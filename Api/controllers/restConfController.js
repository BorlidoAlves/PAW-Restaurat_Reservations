var RestConf = require("../models/RestConf");

var restConfController = {};

restConfController.createRestConf = function(req, res){

    RestConf.create({
        numMaxP: req.body.numMaxP,
        openTimeLunch: req.body.openTimeLunch,
        closeTimeLunch: req.body.closeTimeLunch,
        openTimeDinner: req.body.openTimeDinner,
        closeTimeDinner: req.body.closeTimeDinner,
        timeToEat: req.body.timeToEat,
    }, function(err){
        
        if(err) return res.status(400).send("Não foi possivel efetuar a configuração");

        var arraytime = [];
        var i = new Date(Date.parse(req.body.openTimeLunch));
        var closeTimeL = new Date(Date.parse(req.body.closeTimeLunch)); 
       
        console.log(i)

        while(i <= closeTimeL){
          
            arraytime.push(i);

            i = addMinutes(i, req.body.timeToEat);

            console.log(i)

        }
        
        function addMinutes(date, minutes) {
            return new Date(date.getTime() + (minutes*60000));
        }

        console.log(arraytime);

        RestConf.findOneAndUpdate({$set: {timeAvailable: arraytime}}, function(err){

            if(err) res.status(400).send("Não foi possvel criar o array de horarios")
            
        });

        res.status(200).send("Configuração  efetuada !");
    });
};

module.exports = restConfController;