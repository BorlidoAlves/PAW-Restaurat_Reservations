var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var reservaSchema = new Schema({
    idCliente:{
        type: String,
        require: [true, "Não está a receber o id do cliente"]
    },
    mesReserva:{
        type: Number
    },
    horario: {
        type: Date,
        require: [true, "É obrigatório escolher um horário"]
    },
    ementas:[
        {
            nomeEmenta:{ type: String },
            ementaPessoas:{ type: Number },
            preco:{ type: Number }
        }
    ],
    precoTotal:{
        type: Number
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
        enum: ["Confirmada","Pendente","Cancelada"],
        default: "Pendente"
    }
});

module.exports = mongoose.model("Reserva", reservaSchema);