var Reservation = require("../models/Reserva");

var reservationController = {};
var diasMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

reservationController.createReservation = function (req, res) {

    Reservation.create({
        idCliente: req.params.userId,
        mesReserva: new Date(req.body.horario).getMonth() + 1,
        horario: new Date(Date.parse(req.body.horario) + 60 * 60000),
        ementas: req.body.ementas,
        numPessoas: req.body.numPessoas,
        pedidoEspecial: req.body.pedidoEspecial

    }, function (err) {

        if (err) return res.status(400).send("Não foi possivel efetuar a reserva");

        res.status(200).send("Reserva efetuada !");
    });
};

reservationController.deleteReservation = function (req, res) {

    Reservation.findByIdAndDelete({ _id: req.params.id }, function (err) {
        
        if (err) return res.status(400).send("Não foi possível eliminar");

        res.status(200).send("Eliminado com sucesso !");
    });
}

reservationController.updateReservation = function (req, res) {

    Reservation.findByIdAndUpdate({ _id: req.params.id }, { $set: { horario: req.body.horario, mesReserva: new Date(req.body.horario).getMonth() + 1, numPessoas: req.body.numPessoas, ementas: req.body.ementas, pedidoEspecial: req.body.pedidoEspecial, estado: "Pendente" } }, function (err) {

        if (err) return res.status(400).send("Não foi possível atualizar");

        res.status(200).send("Atualizado com sucesso !");
    });
}

reservationController.updateStatus = function (req, res) {

    Reservation.findByIdAndUpdate({ _id: req.params.id }, { $set: {estado: req.body.estado} }, function (err) {

        if (err) return res.status(400).send("Não foi possível atualizar");

        res.status(200).send("Atualizado com sucesso !");
    });
}

reservationController.getReservationUser = function (req, res) {

    Reservation.find({ idCliente: req.params.userId }, function (err, reservations) {

        if (err) return res.status(400).send("Não foi possível encontrar");

        res.json(reservations);
    });
}

reservationController.getReservations = function (req, res) {

    Reservation.find({}, function (err, reservations) {

        if (err) return res.status(400).send("Não foi possível encontrar");

        res.json(reservations);
    });
}

reservationController.getAveragePessoas = function (req, res) {

    var mes = Number(req.body.mes);

    Reservation.aggregate([{ $match: { mesReserva: mes } }, { $group: { _id: "$mesReserva", numPessoas: { $sum: "$numPessoas" } } }], function (err, pessoas) {

        if (err) res.status(400).send(" Erro ");

        if (!pessoas[0]) res.status(200).json({numAverage: 0});

        else {

            var average = pessoas[0].numPessoas / diasMes[mes - 1];

            res.json({ numAverage: average });

        }
    });
}

reservationController.getAverageReserv = function (req, res) {

    var mes = Number(req.body.mes);
    
    Reservation.aggregate([{ $match: { mesReserva: mes } }, { $group: { _id: null, numReserv: { $sum: 1 } } }], function (err, reserv) {
    
        if (err) res.status(400).send(" Erro ");

        if (!reserv[0]) res.status(200).json({numAverage: 0});

        else {

            var average = reserv[0].numReserv / diasMes[mes - 1];

            res.json({ numAverage: average });
        }
    });
}

reservationController.getAverageCancel = function (req, res) {

    var mes = Number(req.body.mes);
    
    Reservation.aggregate([{ $match: { mesReserva: mes, estado: "Cancelada" } }, { $group: { _id: null , numCancel: { $sum: 1 } } }], function (err, cancel) {
    
        if (err) res.status(400).send(" Erro ");

        if (!cancel[0]) res.status(200).json({numAverage: 0});

        else {

            var average = cancel[0].numCancel / diasMes[mes - 1];

            res.json({ numAverage: average });
        }
    });
}

module.exports = reservationController;