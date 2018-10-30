const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var path = require('path');
const db = require('./models/index').db;
const models = require('./models/index').modelos;

models.User.sync({ force: true })
    .then(function() {
        return models.Producto.sync({ force: false });
    })
    .then(function() {
        return models.Review.sync({ force: false });
    })
    .then(function() {
        return models.Venta.sync({ force: false });
    })
    .then(function() {
        return models.Categoria.sync({ force: false });
    })
    .then(function() {
        app.listen('3000', function() {
            console.log('listening at 3000');
        });
    })
    .catch(console.error);

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('../front/dist'));

app.get('/', function(req, res) {
    models.User.create({
        nombre: 'Sir',
        apellido: 'Lancelot',
        email: 'tusho100pre@gmail.com',
        carrito: ['Max Steel', 'transformers', 'locion anal'],
        admin: false,
        password: 'banana30',
        telefono: 0303456,
    })
    .catch((error) => console.log(error))
    .then(data => {
        res.sendFile(path.resolve('../front/index.html'));
    })
});

