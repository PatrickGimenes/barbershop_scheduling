import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

let accessToken: string = "";

export function setAccessToken(token: string) {
  localStorage.setItem("accessToken", token); // salva para persistência
  accessToken = token;
}

api.interceptors.request.use((config) => {
  const token = accessToken || localStorage.getItem("accessToken"); // pega da memória ou storage
  if (token) {
    config.headers = config.headers || {};
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});

export default api;
