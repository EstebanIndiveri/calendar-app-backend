

// {
//     ok:true,
//     msg:'get eventos'

const { response } = require("express");

// }
const getEventos=(req,res=response)=>{
    res.json({
        ok:true,
        msg:'getEventos'
    });
}

const crearEvento=(req,res=response)=>{

    console.log(req.body);
    
    res.json({
        ok:true,
        msg:'crearEventos'
    });
}

const actualizarEvento=(req,res=response)=>{
    res.json({
        ok:true,
        msg:'actEventos'
    });
}

const eliminarEvento=(req,res=response)=>{
    res.json({
        ok:true,
        msg:'deleteEventos'
    });
}

module.exports={
    getEventos,
    crearEvento,
    actualizarEvento,
    eliminarEvento
}