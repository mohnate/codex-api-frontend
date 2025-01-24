import axios from "axios";

const API_BASE_URL = "http://localhost:3001"; // Replace with your backend URL

export const getTokenList = async () => {
  try {
    const response = await axios.post(`${API_BASE_URL}/tokens-list`); // Assuming the POST request is correct
    return response.data; // Return the token data
  } catch (error) {
    console.error("Error fetching token list", error);
    return []; // Return an empty array if there's an error
  }
};
