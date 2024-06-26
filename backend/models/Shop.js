const { DataTypes } = require('sequelize');
const sequelize = require('../db/database');
const Location = require('./location');

const Shop = sequelize.define('Shop', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  type: {
    type: DataTypes.ENUM('Retailer', 'Wholesale'),
    allowNull: false,
  },
  latitude: {
    type: DataTypes.DECIMAL(10, 8),
    allowNull: true,
  },
  longitude: {
    type: DataTypes.DECIMAL(11, 8),
    allowNull: true,
  },
  status: {
    type: DataTypes.ENUM('Active', 'Inactive'),
    allowNull: false,
    defaultValue: 'Active',
  },
  location_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
        model: 'Locations',
        key: 'id'
    }
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  updated_at: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
}, {
  tableName: 'shops',
  timestamps: true,
  updatedAt: 'updated_at',
  createdAt: 'created_at', 
});

// Define the association with the Location model
Shop.belongsTo(Location, { foreignKey: 'location_id' });

module.exports = Shop;