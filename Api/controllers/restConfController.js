var RestConf = require("../models/RestConf");

var restConfController = {};

restConfController.createRestConf = function(req, res){

    var date = "2020-08-31T"

    RestConf.deleteMany({}, function(err){
        if(err) res.status(400).send("Não foi possivel eliminar db");
    });

    RestConf.create({
        numMaxP: req.body.numMaxP,
        openTimeLunch: date+req.body.openTimeLunch,
        closeTimeLunch: date+req.body.closeTimeLunch,
        openTimeDinner:  date+req.body.openTimeDinner,
        closeTimeDinner: date+req.body.closeTimeDinner,
        timeToEat: req.body.timeToEat,
    }, function(err){
        
        if(err) return res.status(400).send(err);

        var arraytime = [];
        var i = new Date(Date.parse(date+req.body.openTimeLunch));
        var closeTimeL = new Date(Date.parse(date+req.body.closeTimeLunch)); 

        var hour = i.getHours();
        var minutes = i.getMinutes();
        var formatedHour = hour + ":" + minutes;

        console.log(formatedHour);

        while(i <= closeTimeL){
          
            arraytime.push(formatedHour);

            i = addMinutes(i, req.body.timeToEat);

            hour = i.getHours();
            minutes = i.getMinutes();
            formatedHour = hour + ":" + minutes;

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