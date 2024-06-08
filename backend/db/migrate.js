const sequelize = require('./database');
const mysql = require('mysql2/promise');
const Location  = require('../models/Location');
const Shop  = require('../models/Shop');

mysql.createConnection({
  user     : 'root',
  password : ''
}).then((connection) => {
  connection.query('CREATE DATABASE IF NOT EXISTS vendor_shop_management;').then(() => {
    sequelize.sync({force: true}).then(() => {
      console.log('Database & tables created!');
    }).catch(err => {
      console.error('Error creating database & tables:', err);
    });
    })
  connection.end()
})




