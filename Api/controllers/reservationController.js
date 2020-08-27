var Reservation = require("../models/Reserva");

var reservationController = {};

reservationController.createReservation = function(req, res){

    Reservation.create({
        idCliente: req.params.id,
        horario: req.body.horario,
        numPessoas: req.body.numPessoas,
        pedidoEspecial: req.body.pedidoEspecial
    }, function(err){
        if(err) return res.status(400).send("Não foi possivel efetuar a reserva");

        res.status(200).send("Reserva efetuada !");
    });
};

reservationController.deleteReservation = function(req, res){

    Reservation.findByIdAndDelete({_id: req.params.id}, function(err){
        if(err) return res.status(400).send("Não foi possível eliminar");

        res.status(200).send("Eliminado com sucesso !");
    });
}

reservationController.updateReservation = function(req, res){

    Reservation.findByIdAndUpdate({_id: req.params.id}, {$set:{horario: req.body.horario, numPessoas: req.body.numPessoas, pedidoEspecial: req.body.pedidoEspecial, estado: "Pendente"}}, function(err){
        
        if(err) return res.status(400).send("Não foi possível atualizar");

        res.status(200).send("Atualizado com sucesso !");
    });
}

reservationController.getReservationUser = function(req, res){

    Reservation.find({idCliente: req.params.idCliente}, function(err, reservations){

        if(err) return res.status(400).send("Não foi possível encontrar");

        res.json(reservations);
    });
}

module.exports = reservationController;