const express = require('express');
require('dotenv').config();

const app=express();


//public
app.use(express.static('public'));

//read parse body
app.use(express.json());

//rutas
app.use('/api/auth',require('./routes/auth'));


//auth, log, newtoken
//crud: eventos




const port =process.env.PORT

app.listen(port, ()=>{
    console.log(`Servidor corriendo en puerto ${port}`);
})