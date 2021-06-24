const db = require('../models');

const {
        check,
        body,
        validationResult,
} = require("express-validator");

const loginController = {
        login: function (req, res) {
                res.render("login");
        },

        processLogin: (req, res) => {
                let errors = validationResult(req);
                if (errors.isEmpty()) { 
                        console.log('LOGUEADO '+ req.body.email);

                      
                                db.Usuarios.findAll({
                                        where: {email : req.body.email , password: req.body.password}
                                   
                                }).then((resultado) =>{

                                      
                                      console.log(resultado[0].dataValues.rol)

                                      req.session.usuarioLogueado = resultado[0].dataValues.name;
                                      req.session.privilegios = resultado[0].dataValues.rol;
                        if(req.body.recordame != undefined){
                                res.cookie('recordame', req.session.usuarioLogueado, {maxAge:60000})
                        }
                       
                        res.redirect('/')
                                })
                                
                        ///UNA VES LOGUEADO

                        

                } else {
                        return res.render("login", { errors: errors.errors });
                }
        },


        

};

module.exports = loginController;
