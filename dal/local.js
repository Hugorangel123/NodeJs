const db =require('../config/local');

exports.selectEventos =() =>{
    return db.eventos;
};

exports.selectEvento =(id) =>{
const evento = db.eventos.find(evento => evento.id==id)
return evento;
} 

exports.insertEvento =(nombre,descripcion) =>{
    const id = db.eventos[db.eventos.length-1].id+1;

    db.eventos.push({
        id,
        nombre,
        descripcion
    });

    return id;
}

exports.updateEvento = (id, nombre, descripcion) => {
    const evento = db.eventos.find(evento => evento.id==id);
    evento.nombre=nombre;
    evento.descripcion=descripcion;
    return id;

}

exports.deleteEvento = (id) =>{
    const index = db.eventos.findIndex(evento => evento.id ==id);
    if(index!== -1){
        db.eventos.splice(index, 1);
    }
    
    return id;


}

