const db =require('../config/local');

exports.selectEventos =() =>{
    return db.eventos;
};