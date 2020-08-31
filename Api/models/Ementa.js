var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ementaSchema = new Schema({
    appetizer:{
        type: String,
        require:[true, "É obrigatório ter aperitivo."]
    },
    mainCourse:{
        type: String,
        require: [true, "É obrigatório ter um prato principal."],
    },
    soup:{
        type: String,
        require: [true, "É obrigatório ter sopa."],
    },
    dessert:{
        type: String,
        require: [true, "É obrigatório ter uma sobremesa."],
    },
    price:{
        type: Number,
        require: [true, "É obrigatório ter preço."],
    }
});

module.exports = mongoose.model("Ementa", ementaSchema);