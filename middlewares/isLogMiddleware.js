function isLogMiddleware(req, res, next){
    if(req.session.usuarioLogueado == undefined) {

        next();

    } else {
        res.send('Ya estas Logueado como: ' + req.session.usuarioLogueado)
    }


}

module.exports = isLogMiddleware;