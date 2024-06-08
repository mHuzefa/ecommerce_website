const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('vendor_shop_management', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;
