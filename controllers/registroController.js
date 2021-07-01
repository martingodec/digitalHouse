const db = require('../models');
const {
    check,
    body,
    validationResult,
} = require("express-validator");


const registroController = {
   
    registrar: function (req, res) {
        res.render("registro");
}


};

module.exports = registroController;