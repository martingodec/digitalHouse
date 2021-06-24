const db = require('../models');


const detalleController = {
    detalle: function (req, res){
        db.Peliculas.findByPk(req.params.id, {
            include : [{association: 'generos'}, {association:'actores'}]
        })
        .then(function(pelicula){

            res.render('detalle', {pelicula: pelicula , usuario: req.session.usuarioLogueado, privilegio: req.session.privilegios});
        })
      
      
      
        
        }


};


module.exports = detalleController;