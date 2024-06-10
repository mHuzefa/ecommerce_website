const locations = require('../data/locations.json')
const shops = require('../data/shops.json')
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('locations', locations)
    return queryInterface.bulkInsert('shops', shops);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('locations', null, {})
    return queryInterface.bulkDelete('shops', null, {});
  },
};

