const { Router } = require('express');
const { check } = require('express-validator');

const { isDate } = require('../helpers/isDate');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');
const { getEventos, crearEvento, actualizarEvento, eliminarEvento } = require('../controllers/events');
const router=Router();
//validacion JWT middleware high order
router.use(validarJWT);


//obtener eventos:

router.get(
    '/',
    
    getEventos);


//crer un nuevo evento
router.post(
    '/',
    [
        check('title','El titulo es obligatorio').not().isEmpty(),
        check('start','Fecha de inicio es obligatoria').custom( isDate ),
        check('end','Fecha de inicio es obligatoria').custom( isDate ), 
        validarCampos
    ],
    crearEvento 
);

//act
router.put(
    '/:id',
    [
        check('title','El titulo es obligatorio').not().isEmpty(),
        check('start','Fecha de inicio es obligatoria').custom( isDate ),
        check('end','Fecha de inicio es obligatoria').custom( isDate ), 
    ],
    actualizarEvento);


router.delete(
    '/:id',
    [
        check('title','El titulo es obligatorio').not().isEmpty(),
        check('start','Fecha de inicio es obligatoria').custom( isDate ),
        check('end','Fecha de inicio es obligatoria').custom( isDate ), 
    ],
    eliminarEvento);

module.exports=router;