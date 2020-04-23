require('./config/config');

const express = require('express')
const app = express()

//Declarar el uso del paquete
const bodyParser = require('body-parser');


//configurar la peticion para el post en urlencoded
//son milware que todo peticion va pasar por aca
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//Configurar las peticiones
app.get('/usuario', function(req, res) {
    res.json('get Usuario')
});

app.post('/usuario', function(req, res) {
    //Trabaja con el bodyParser
    let body = req.body;
    //Validamos si el nombre esta definido o algo salio mal
    if (body.nombre === undefined) {
        res.status(400).json({
            ok: false,
            mensaje: "El nombre es necesario"
        });
    } else {
        res.json({
            body
        });
    }
});
// Le estoy pidiendo que me retorne el id enviado por la url
// :id es el mismo el id de params.id
app.put('/usuario/:id', function(req, res) {
    let id = req.params.id;

    res.json({
        id // id:id
    })
});

app.delete('/usuario', function(req, res) {
    res.json('delete Usuario')
});



app.listen(process.env.PORT, () => {
    console.log("Escuchando puerto: ", process.env.PORT)
})