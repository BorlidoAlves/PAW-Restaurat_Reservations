var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ementaSchema = new Schema({
    nomePrato:{
        type: String,
        unique: [true, "Já exite um prato com este nome"],
        require:[true, "É obrigatório ter um nome."]
    },
    confecao:{
        type: String,
        require: [true, "É obrigatório ter uma breve explicação do prato."],
    },
    dose:{
        type: Number,
        require: [true, "É obrigatório ter um preço da dose."],
    },
    meiaDose:{
        type: Number,
        require: [true, "É obrigatório ter um preço da meia dose."],
    }
});

module.exports = mongoose.model("Ementa", ementaSchema);