var db = require('./db');
const Sequelize = require('sequelize');

const Review = db.define('review', {
  comentario: {
    type: Sequelize.STRING,
  },
  estrellas: {
    type: Sequelize.INTEGER
  }
});

module.exports = Review 
