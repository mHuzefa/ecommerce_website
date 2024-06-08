const { DataTypes } = require('sequelize');
const sequelize = require('../db/database');

const Location = sequelize.define('Location', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  parent_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'Locations', 
      key: 'id',
    },
  },
  name: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  level: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  tableName: 'locations', 
  timestamps: true, 
});

// Define the self-referencing association
Location.belongsTo(Location, { as: 'parent', foreignKey: 'parent_id' });

module.exports = Location;