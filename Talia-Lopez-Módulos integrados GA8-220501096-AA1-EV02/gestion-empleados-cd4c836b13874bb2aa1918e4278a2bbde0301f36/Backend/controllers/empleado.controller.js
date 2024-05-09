// incorporar dependencias
const express = require('express');
const usarEmpleado = require('../models/empleado');

const router = express.Router();
//----------definimos los metodos----

// obtener todos los empleados

router.get('/empleados', (req, res)=>{
    usarEmpleado
        .find()
        .then((data)=> res.json(data))
        .catch((error)=>res.json({message:error}))
})

// obtener un empleado por id
router.get("/empleados/:id", (req, res) => {
    const { id } = req.params;
    usarEmpleado
        .findById(id)
        .then((data)=> res.json(data))
        .catch((error)=>res.json({message:error}))
})

// crear un empleado nuevo
router.post('/empleados', (req, res)=>{
    const empleado = usarEmpleado(req.body);
    empleado
        .save()
        .then(()=> res.json({status: 'Empleado nuevo creado'}))
        .catch((error)=>res.json({message:error}))
});

// modificar un empleado por id

router.put("/empleados/:id", (req, res) => {
    const { id } = req.params;
    const {name, position, office, salary} = req.body;
    usarEmpleado
        .updateOne({ _id:id }, { $set:{name, position, office, salary} })
        .then(()=> res.json({status: 'Empleado modificado'}))
        .catch((error)=>res.json({message:error}))
})

// Eliminar un empleado por id
router.delete("/empleados/:id", (req, res) => {
    const { id } = req.params;
    usarEmpleado
        .deleteOne({ _id:id })
        .then(()=> res.json({status: 'Empleado Eliminado'}))
        .catch((error)=>res.json({message:error}))
})


module.exports = router;    