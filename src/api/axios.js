// src/api/axios.js
import axios from "axios";

const API = axios.create({
  baseURL: "https://jobnest-backend-et7d.onrender.com/api",
});

// Attach token if it exists
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("jobnestToken");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default API;
