import axios from 'axios';

const API_BASE_URL = 'https://your-api-url.com'; // Replace with your actual API base URL

export const fetchData = async (endpoint: string, params?: any) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/${endpoint}`, { params });
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

export const postData = async (endpoint: string, data: any) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/${endpoint}`, data);
        return response.data;
    } catch (error) {
        console.error('Error posting data:', error);
        throw error;
    }
};

// Additional functions for PUT, DELETE, etc. can be added here as needed.