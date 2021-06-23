function authMiddleware(req, res, next){
    if(req.session.usuarioLogueado != undefined) {

        next();

    } else {
        res.send('Esta opcion es solo para Administradores')
    }


}

module.exports = authMiddleware;