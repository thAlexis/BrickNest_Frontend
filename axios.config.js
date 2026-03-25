import axios from "axios";

const api = axios.create({
  baseURL: "https://bricknest-backend.onrender.com",
});

export default api;
