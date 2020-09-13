const {response}=require('express');
const Usuario = require('../models/Usuario');

const loginUsuario=(req,res=response)=>{
   
    const{email,password}=req.body;
    res.status(200).json({
        ok:'login',
        email,
        password
    })
}

const crearUsuario=async(req,res=response)=>{
    // const{name,email,password}=req.body;

    try{
        const usuario=new Usuario(req.body);

        await usuario.save()
    }catch(err){
        res.status(500).json({
            ok:false,
            msg:'Por favor intente nuevamente'
        })
    }
    

    res.status(201).json({
        ok:'new',
        msg:'registro'
        
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