const db = require('../models');


const indexController = {
    listado: function (req, res){

            db.Peliculas.findAll()
                .then(function(peliculas){
                    res.render('index', {peliculas: peliculas});

                })
                
                
}
        

        


};


module.exports = indexController; 