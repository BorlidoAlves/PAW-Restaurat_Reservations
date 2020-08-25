var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var reservaSchema = new Schema({
    idCliente:{
        type: String,
        require: [true, "Não está a receber o id do cliente"]
    },
    horario: {
        type: Date,
        require: [true, "É obrigatório escolher um horário"]
    },
    numPessoas: {
        type: Number,
        require: [true, "É obrigatório introduzir o num de pessoas"]
    },
    pedidoEspecial:{
        type: String
    },
    estado:{
        type: String,
        enum: ["Confirmado","Pendente"]
    }
});

module.exports = mongoose.model("Reserva", reservaSchema);