import axios from '../lib/axios.config';

class ShopService {
	static async showAll() {
		try {
			const response = await axios.get('/shops');
			return response.data;
		} catch (error) {
			console.error(error);
			throw error;
		}
	}

	static async show(id: number) {
		try {
			const response = await axios.get(`/shops/${id}`);
			return response.data;
		} catch (error) {
			console.error(error);
			throw error;
		}
	}

	static async create(data: any) {
		try {
			const response = await axios.post('/shops', data);
			return response.data;
		} catch (error) {
			console.error(error);
			throw error;
		}
	}

	static async update(id: number, data: any) {
		try {
			const response = await axios.put(`/shops/${id}`, data);
			return response.data;
		} catch (error) {
			console.error(error);
			throw error;
		}
	}

	static async delete(id: number) {
		try {
				await axios.delete(`/shops/${id}`);
		} catch (error) {
				console.error('Error deleting shop:', error);
				throw error;
		}
}
}

export default ShopService;
