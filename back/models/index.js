var db = require('./db');

const Producto = require('./Producto');
const User = require('./Users');
const Review = require('./Reviews');
const Venta = require('./Ventas');
const Categoria = require('./Categorias');

const modelos = {
    Producto,
    User,
    Review,
    Venta,
    Categoria
};

User.hasMany(Venta, { as: 'Compras' });

User.hasMany(Producto, { as: 'publicaciones' });

Producto.hasMany(Review, { as: 'Reviews' });
Review.belongsTo(Producto)

User.hasMany(Review, { as: 'userReviews' });
Review.belongsTo(User)

Producto.belongsToMany(Venta, { through: 'ProductoVenta' });
Venta.belongsToMany(Producto, { through: 'ProductoVenta' });

Categoria.belongsToMany(Producto, { through: 'ProductoCategoria' });
Producto.belongsToMany(Categoria, { through: 'ProductoCategoria' });

module.exports = {
    modelos,
};
