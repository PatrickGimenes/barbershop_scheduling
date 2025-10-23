import axios from "axios";

const api = axios.create({
  baseURL: "localhost:3333/", //usar dotenv
  timeout: 5000,
});

// Interceptadores opcionais
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API error:", error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default api;
