// declaramos requerimientos necesarios 
const express = require('express');
const morgan = require('morgan');
const cors = require('cors')
const userRoutes = require('./controllers/empleado.controller')

// declaramos una variable app para en esta inicializar express
const app = express();

// creamos la conexion al archivo database
const { mongoose } = require('./database');


// creacion de la Rest API------------------------------
app.set('port', process.env.PORT || 3000);

// comunicar con el cliente y manejar errores
app.use(cors({
    origin: 'http://localhost:5173'
}));

// 
app.use(morgan('dev'));

//convertimos el codigo para que el servidor logre entenderlo 
app.use(express.json())
app.use('/api', userRoutes);


// -----------------RUTAS----------------------------
app.use('/api/empleados', require('./routes/empleado.route'))


// iniciamos el servidor
app.listen(app.get('port'),()=>{
    console.log('Servidor activo en el puerto', app.get('port'))
});