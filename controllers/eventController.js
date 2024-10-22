exports.getEvento = (req,res) => {
    const{ id }= req.params;
    const eventos = ['evento 1', 'evento 2', 'evento 3'];
    res.status(200).json (eventos[id-1]);
    res.status

    
}

exports.getEventos=(req,res) =>{
    const eventos = ['evento 1', 'evento 2', 'evento 3'];
    res.status(200).json(eventos);
}