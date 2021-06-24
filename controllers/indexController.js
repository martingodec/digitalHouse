const db = require('../models');


const indexController = {
    listado: function (req, res){

            db.Peliculas.findAll()
                .then(function(peliculas){
                    res.render('index', {peliculas: peliculas, usuario: req.session.usuarioLogueado} );

                })
                
                
    },

    crear: function (req,res){

        db.Generos.findAll()
        .then(function(generos){
            res.render('crearPelicula', {generos: generos});


        })},


    guardar: function(req, res){

        db.Peliculas.create({
            title: req.body.titulo,
            rating: req.body.rating,
            awards: req.body.premios,
            release_date: req.body.release_date,
            length: req.body.duracion ,
            genre_id:req.body.genero

        })
        .then( res.redirect('/'))
        //res.redirect('/')
    }
        

    

};


module.exports = indexController; 