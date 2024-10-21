const express = require('express');
const dotenv = require('dotenv');

//const eventRoutes = require('./routes/eventRoutes')

//Const reservaRoutes = requiere('./routes/reservaRoutes');

//const db = require('./config/db');

const app = express();
app.use(express.json());

//app.use('/api/eventos',eventRoutes);

//app.use('/api/eventos',reservaRoutes);

const PORT= process.env.PORT || 3000;

app.listen(PORT,() => {
    console.warn('Hola')
    console.info(`Servidor corriendo en el puerto ${PORT}` )
});
