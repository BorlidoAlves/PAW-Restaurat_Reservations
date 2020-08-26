var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema({
    email:{
        type: String,
        unique: [true, "Já exite uma conta registada com este email"],
        require:[true, "É obrigatório ter um email."]
    },
    password:{
        type: String,
        require: [true, "É obrigatório ter uma password."],
    },
    tipo:{
        type: String,
        enum: ["Utilizador","Admin"],
        default: "Utilizador"
    },
    contacto:{
        type: Number,
        required: [true, "É obrigatório ter um contacto associado."],
    }
});

module.exports = mongoose.model("User", userSchema);