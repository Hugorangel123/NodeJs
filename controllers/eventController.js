const { json } = require("express");
const db = require('../config/db')

const {
selectEventos,
selectEvento
}=require('../dal/local')

  


    exports.getEvento = (req, res) => {

         const { id } = req.params;
        // try {   
        //     db.query(`SELECT * FROM eventos WHERE ID = ${id}`,(err,results) =>{
        //        if(err) return res.status(500).json(err);
        //         res.status(200).json(results);
        //     });
    
        // } catch (error){
        //     res.status(500).json(error.message);
        // }

        res.status(200).json(selectEvento(id));

    }

exports.getEventos=(req,res) =>{
    // db.query('SELECT * FROM eventos',(err,results) =>{
    //     if(err) return res.status(200).json(err);
    //     res.status(200).json(results);
    // });

    res.status(200).json(selectEventos());
}

exports.editEvento=(req,res)=>{
     const{ id }= req.params;
    // const {nombre, descripcion} = req.body;
    
    // const evento = eventos.find(evento => evento.id==id);
    // evento.nombre=nombre;
    // evento.descripcion=descripcion;

    // console.info(eventos)

    // res.status(200).json(`Se realizaron en el evento ${id}`);

    

}


exports.createEvento=(req,res)=>{
    const {nombre, descripcion} = req.body;
    const id =eventos.length+1;
    const evento={
        id,
        nombre,
        descripcion
    };

    eventos.push(evento);

    console.info(eventos);
    


    res.status(200).json(`Se creo un nuevo evento: ${nombre}, con id ${id}`);
}


exports.deleteEvento=(req, res) => {
    try{


    const { id } = req.params;

    const nombre = eventos.find(evento => evento.id == id).nombre
    eventos = eventos.filter(evento => evento.id != id);


    console.info(eventos);

    res.status(200).json('Se elimino el evento: ' + nombre);
    } catch (error) {
        res.status(400).json('Ocurrio un error');
    }

}