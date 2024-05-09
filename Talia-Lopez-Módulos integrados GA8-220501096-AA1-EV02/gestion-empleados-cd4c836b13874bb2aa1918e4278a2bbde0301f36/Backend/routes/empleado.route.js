// declaramos los requerimientos necesarios
const express = require('express');
const router = express.Router();

// ejemplo de solicitud GET

router.get('/', (req, res) =>{
    res.json({
        status: 'API funcionando'
    })
})

module.exports = router;