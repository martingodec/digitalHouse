function authMiddleware(req, res, next){
    if(req.session.usuarioLogueado != undefined && req.session.privilegios == 1) {

        next();

    } else {
        res.send('Esta opcion es solo para Administradores')
    }


}

module.exports = authMiddleware;