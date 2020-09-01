var RestConf = require("../models/RestConf");

var restConfController = {};

restConfController.createRestConf = function(req, res){

    RestConf.deleteMany({}, function(err){
        if(err) res.status(400).send("Não foi possivel eliminar db");
    });

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
        var i = new Date(Date.parse(req.body.openTimeLunch) + 60 * 60000);
        var closeTimeL = new Date(Date.parse(req.body.closeTimeLunch) + 60 * 60000); 
       
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

        RestConf.findOneAndUpdate({}, {timeAvailable: arraytime}, function(err){

            if(err) res.status(400).send("Não foi possvel criar o array de horarios")
            
        });

        res.status(200).send("Configuração  efetuada !");
    });
};

restConfController.getTimeReserv = function(req, res){

    RestConf.findOne({}, function(err, array){
        
        if(err) res.status(400).send("Erro ao encontrar horários de reserva");

        res.json(array.timeAvailable);
    })
}

module.exports = restConfController;