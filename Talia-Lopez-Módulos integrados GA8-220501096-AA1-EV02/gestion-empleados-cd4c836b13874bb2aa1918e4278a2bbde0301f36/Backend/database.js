const mongoose = require('mongoose');

const URI = 'mongodb+srv://jorgeorincono:1030655045Jv@cluster0.tkroekh.mongodb.net/Empleados?retryWrites=true&w=majority&appName=Cluster0';

mongoose
    .connect(URI)
    .then(db =>console.log('Conectado a la base de datos'))
    .catch(err => console.error(err))

module.exports = mongoose;