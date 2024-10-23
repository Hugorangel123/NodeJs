const db =require('../config/local');

exports.selectEventos =() =>{
    return db.eventos;
};

exports.selectEvento =(id) =>{
const evento = db.eventos.find(eventos => eventos.id==id)


return evento;


} 