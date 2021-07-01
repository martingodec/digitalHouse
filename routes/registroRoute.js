const express = require('express');
const router = express.Router();
const registroController = require('../controllers/registroController')
const { check, valifationResult, body } = require('express-validator');

const isLogMiddleware = require('../middlewares/isLogMiddleware')


router.get('/',isLogMiddleware, registroController.registrar);

//router.post('/', [check('email').isEmail(), check('password').isLength({ min: 8 }).withMessage('La contraseña debe tener mas de 8 caracteres')], registroController.processLogin);





module.exports = router;