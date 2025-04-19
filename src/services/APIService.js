import axios from "axios";

// Determine the environment and set the API base URL accordingly
const isProduction = process.env.REACT_APP_ENV === 'production';

const axiosInstance = axios.create({
  baseURL: isProduction
    ? process.env.REACT_APP_API_URL_PROD  // API URL for production
    : process.env.REACT_APP_API_URL_DEV,  // API URL for development
  headers: {
    "Content-Type": "application/json",
    ...(isProduction && { // Only add token header in production
      "Authorization": `Bearer ${localStorage.getItem("token")}`
    })
  }
});

const APIService = {
  get: async (path) => {
    try {
      const response = await axiosInstance.get(path);
      return response.data;
    } catch (error) {
      console.error(`GET request failed: ${error.message}`);
      throw error;
    }
  },

  post: async (path, data) => {
    try {
      const response = await axiosInstance.post(path, data);
      return response;
    } catch (error) {
      console.error(`POST request failed: ${error.message}`);
      throw error;
    }
  },

  // More methods can be added here...
};

export default APIService;

