var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var restConfSchema = new Schema({
    numMaxP:{
        type: Number,
        require: [true, "É obrigatório dizer qual o número max de pessoas"]
    },
    openTimeLunch:{
        type: Date,
        require: [true, "É obrigatório dizer qual é a hora de fecho do almoço"]
    },
    closeTimeLunch:{
        type: Date,
        require: [true, "É obrigatório dizer qual é a hora de fecho do almoço"]
    },
    openTimeDinner:{
        type: Date,
        require: [true, "É obrigatório dizer qual é a hora de fecho do almoço"]
    },
    closeTimeDinner:{
        type: Date,
        require: [true, "É obrigatório dizer qual é a hora de fecho do almoço"]
    },
    timeToEat:{
        type: Number,
        require: [true, "É obrigatório definir o tempo médio de refeição"]
    },
    timeAvailable:{
        type: Array
    }
});

module.exports = mongoose.model("RestConf", restConfSchema);