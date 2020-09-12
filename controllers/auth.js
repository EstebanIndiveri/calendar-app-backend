const {response}=require('express');

const loginUsuario=(req,res)=>{
    res.json({
        ok:'login'
    })
}

const crearUsuario=(req,res=response)=>{
    res.json({
        ok:'new'
    });
}

const revalidarToken=(req,res)=>{
    res.json({
        ok:'retoken'
    })
}

module.exports={
    crearUsuario,
    revalidarToken,
    loginUsuario
}