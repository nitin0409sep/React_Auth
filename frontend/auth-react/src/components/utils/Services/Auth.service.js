import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL;

export const loginUser = () => { }

export const registerUser = async (requestBody) => {
    try {
        const { data } = await axios.post(`${apiUrl}/auth/register`, requestBody);
        return data;
    } catch (error) {
        throw error.response ? error.response.data : new Error("Network error");
    }
};
