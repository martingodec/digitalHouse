const db = require('../models');


const detalleController = {
    detalle: function (req, res){
        db.Peliculas.findByPk(req.params.id)
        .then(function(pelicula){

            res.render('detalle', {pelicula: pelicula});
        })
      
      
      
        
        }


};


module.exports = detalleController;