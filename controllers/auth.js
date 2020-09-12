const {response}=require('express');

const loginUsuario=(req,res=response)=>{
    const{email,password}=req.body;

    res.json({
        ok:'login',
        email,
        password
    })
}

const crearUsuario=(req,res=response)=>{
    const{name,email,password}=req.body;
    res.json({
        ok:'new',
        name,
        email,
        password
    });
}

const revalidarToken=(req,res=response)=>{
    res.json({
        ok:'retoken'
    })
}

module.exports={
    crearUsuario,
    revalidarToken,
    loginUsuario
}