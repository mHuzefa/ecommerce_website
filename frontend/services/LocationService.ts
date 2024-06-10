import axios from '../lib/axios.config';

class LocationService {
	static async showAll() {
		try {
			const response = await axios.get('/locations');
			return response.data;
		} catch (error) {
			console.error(error);
			throw error;
		}
	}

	static async show(id: number) {
		try {
			const response = await axios.get(`/locations/${id}`);
			return response.data;
		} catch (error) {
			console.error(error);
			throw error;
		}
	}

	static async create(data: any) {
		try {
			const response = await axios.post('/locations', data);
			return response.data;
		} catch (error) {
			console.error(error);
			throw error;
		}
	}

	static async update(id: number, data: any) {
		try {
			const response = await axios.put(`/locations/${id}`, data);
			return response.data;
		} catch (error) {
			console.error(error);
			throw error;
		}
	}

	static async delete(id: number) {
		try {
				await axios.delete(`/locations/${id}`);
		} catch (error) {
				console.error('Error deleting shop:', error);
				throw error;
		} 
  }

  static async getTopLevelLocation(){
    try {
      const response = await axios.get('/locations/top_level');
      return response.data;
    } catch (error) {
      console.error('Error finding locations by level:', error);
				throw error;
    }
  }

  static async getLocationsByParent(id: number){
    try {
      const response = await axios.get(`/locations/${id}/by_parent`);
      return response.data;
    } catch (error) {
      console.error('Error finding locations by parent:', error);
				throw error;
    }
  }
}

export default LocationService;
