// Jestzidl.js
import axios from "axios";

export async function axiosData() {
    const response = await axios.get('https://api.example.com/data');
    return response.data;
}
