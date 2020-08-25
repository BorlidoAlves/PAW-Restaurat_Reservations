var User = require("../models/User");
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
var config = require("../authconfig"); 

var autenticacaoController = {};

autenticacaoController.registaUtilizador = function(req,res){
    var hashedPassword = bcrypt.hashSync(req.body.password, 10);

    User.create({
        email: req.body.email,
        password: hashedPassword,
        tipo: req.body.tipo,
        contacto: req.body.contacto,
    }, function(err, user){
        
        if(err) return res.status(400);

        var token = jwt.sign({id: user._id, tipo: user.tipo}, config.secret, {
            expiresIn: 86400 // 24h
        });
        res.status(200).send({auth: true, token: token});
    });
};

autenticacaoController.login = function(req,res){
    User.findOne({email: req.body.email}, function(err, user){
        if(err) return res.status(500);    
        if(!user) return res.status(404).send({erro: "Utilizador não encontrado"});
        
        var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
        
        if(!passwordIsValid) return res.status(401).send({auth: false, token: null, message: "Dados errados"});
        
        var token = jwt.sign({id: user._id, tipo: user.tipo}, config.secret, {
            expiresIn: 86400 // 24h
        });

        res.status(200).send({auth: true, token: token, tipo: user.tipo, id: user._id});
    });
}
autenticacaoController.logout = function (req, res) {
    res.status(200).send({ auth: false, token: null });
};

autenticacaoController.verifyToken = function (req, res, next) {
    
    var token = req.headers["x-access-token"];
    
    if (!token) return res.status(403).send({ auth: false, message: "Nenhum token fornecido" });
  
    jwt.verify(token, config.secret, function (err, decoded) {
      
        if (err) return res.status(500).send({ auth: false, message: "Não foi possível autenticacaor o token." });
        // if everything is good, save to request for use in other routes
        req.id = decoded._id;
    
        req.tipo = decoded.tipo;
    
        next();
    });
};


autenticacaoController.updatePassword = async function(req,res){
    var hashedPassword = bcrypt.hashSync(req.body.password);

    User.findByIdAndUpdate({_id: req.body._id}, {$set:{password: hashedPassword, contacto: req.body.contacto}}, function(err){
        if(err)
            console.log(err);
        else
            res.send("Utilizador editado com sucesso");
    });
 
};


module.exports = autenticacaoController;