var db = require('./db');
const Sequelize = require('sequelize')

const Carrito = db.define('carritos', {
    carro: {
        type: Sequelize.TEXT('long')
    }
});

module.exports = Carrito 