//auth routes HOST + api/auth

const express=require('express');
const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth');
const router=express.Router();


router.post('/',loginUsuario);

router.post('/new',crearUsuario);

router.get('/renew',revalidarToken);



module.exports=router;