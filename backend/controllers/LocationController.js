const { QueryTypes } = require('sequelize');
const sequelize = require('../db/database');
const Location = require('../models/Location');
const { LOCATION_LEVELS } = require('../db/sql-queries');
module.exports = class LocationController {
	async showAll(req, res) {
		const locations = await Location.findAll()
		res.json(locations)
	};

	async show(req, res) {
		try {
			const location = await Location.findByPk(req.params.id);

			if (!location) {
				return res.status(404).json({ error: 'Location not found' });
			}

			res.json(location);
		} catch (error) {
			console.error('Error fetching location:', error);
			res.status(500).json({ error: 'Internal server error' });
		}
	}


	async create(req, res) {
		try {
			const data = req.body;

			const location = await Location.create({
				name: data?.name,
				level: data?.level,
				parent_id: data?.parent_id
			});

			res.json(location);
		} catch (error) {
			console.error('Error creating location:', error);
			res.status(500).json({ error: 'Internal server error' });
		}
	}


	async update(req, res) {
		try {
			const locationId = req.params.id;
			const updatedData = req.body;

			const location = await Location.findByPk(locationId);

			if (!location) {
				return res.status(404).json({ error: 'Location not found' });
			}

			console.log('Request Body:', req.body);
			await location.update({
				name: updatedData.name,
				level: updatedData.level,
				parent_id: updatedData?.parent_id
			});

			res.json(location);
		} catch (error) {
			console.error('Error updating location:', error);
			res.status(500).json({ error: 'Internal server error' });
		}
	};


	async delete(req, res) {
		const location = await Location.findByPk(req.params.id)
		await location.destroy().then(() => {
			res.json(location)
		})
	}

	async getTopLevelLocations(req, res) {
		try {
			const locations = await Location.findAll({
				where: {
					parent_id: null
				}
			})
			res.json(locations)
		}
		catch {
			res.status(404).json({error: 'Level not defined'})
		}
	}

	async getAvailableLevels(req, res){
		const levels = await sequelize.query(LOCATION_LEVELS, {
			type: QueryTypes.SELECT
		})
		res.json(levels.map(obj => obj.levels))
	}

	async getLocationsByLevel(req, res) {
		const { level } = req.query
		if (level) {
			const locations = await Location.findAll({
				where: {
					level: level
				}
			})
			res.json(locations)
		}
		else {
			res.status(404).json({error: 'Level not defined'})
		}
	}


	async getLocationsByParent(req, res) {
		const locationId = req.params.id
		if (locationId) {
			const locations = await Location.findAll({
				where: {
					parent_id: locationId
				}
			})
			res.json(locations)
		}
	}
}

