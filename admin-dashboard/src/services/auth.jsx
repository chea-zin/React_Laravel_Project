// Import the api instance to make HTTP requests
import api from './api';

// Login function: makes a POST request to the /login endpoint with the provided credentials
export const login = async (credentials) => {
  // Send a POST request with the user's login credentials
  const response = await api.post('/login', credentials);
  // Return the data from the response (usually includes authentication token or user info)
  return response.data;
};
// Get the current authenticated user: retrieves the stored 'authToken' from localStorage
// services/auth.js (or wherever getCurrentUser is defined)
export const getCurrentUser = () => {
    try {
        const userJson = localStorage.getItem('user');
        if (!userJson) {
            return null; // Or return an empty object: {}
        }
        return JSON.parse(userJson);
    } catch (error) {
        console.error("Error retrieving user from localStorage:", error);
        return null;
    }
};

// Logout function: removes the 'authToken' from localStorage to log out the user
export const logout = () => {
  // Remove the 'authToken' from localStorage, effectively logging the user out
  localStorage.removeItem('authToken');
};
