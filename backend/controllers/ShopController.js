const { QueryTypes } = require('sequelize');
const sequelize = require('../db/database');
const Shop = require('../models/Shop');
const { SHOP_WITH_LOCATION_NAMES } = require('../db/sql-queries');

module.exports = class ShopController {

	async showAll(req, res) {
		const shops = await sequelize.query(SHOP_WITH_LOCATION_NAMES, {
	type: QueryTypes.SELECT,
})
		await res.json(shops)
	};

	async show(req, res) {
		try {
			const shop = await Shop.findByPk(req.params.id);

			if (!shop) {
				return res.status(404).json({ error: 'shop not found' });
			}

			res.json(shop);
		} catch (error) {
			console.error('Error fetching shop:', error);
			res.status(500).json({ error: 'Internal server error' });
		}
	}



	async create(req, res) {
		try {
			const data = req.body;

			const shop = await Shop.create({
				title: data?.title,
				type: data?.type,
				status: data?.status,
				latitude: Math.floor(data?.latitude) || null,
				longitude: Math.floor(data?.longitude) || null,
				location_id: parseInt(data?.location_id)
			});

			res.json(shop);
		} catch (error) {
			console.error('Error creating shop:', error);
			res.status(500).json({ error: 'Internal server error' });
		}
	}

	async update(req, res) {
		try {
			const shopId = req.params.id;
			const data = req.body;

			const shop = await Shop.findByPk(shopId);

			if (!shop) {
				return res.status(404).json({ error: 'Shop not found' });
			}

			console.log('Request Body:', req.body);
			await shop.update({
				title: data?.title,
				type: data?.type,
				status: data?.status,
				latitude: data?.latitude,
				longitude: data?.longitude,
				location_id: data?.location_id
			});

			res.json(shop);
		} catch (error) {
			console.error('Error updating location:', error);
			res.status(500).json({ error: 'Internal server error' });
		}
	};

	async delete(req, res) {
		const shop = await Shop.findByPk(req.params.id)
		await shop.destroy().then(() => {
			res.json({ message: "Shop deleted successfully!" })
		})
	}

}

