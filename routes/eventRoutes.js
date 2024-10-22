const express = require('express');
const router = express.Router();
const{
    getEvento,
    getEventos
}= require('../controllers/eventController');

router.get('/',getEventos);
router.get('/:id', getEvento)

module.exports=router;