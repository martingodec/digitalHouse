const express = require('express');
const router = express.Router();
const detalleController = require('../controllers/detalleController')

router.get('/:id', detalleController.detalle);
router.get('/editar/:id', detalleController.editar);
router.post('/editar/:id', detalleController.actualizar);
router.post('/borrar/:id',detalleController.borrar)

module.exports = router;