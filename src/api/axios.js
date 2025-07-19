// src/api/axios.js
import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

// Attach token if it exists
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("jobnestToken");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default API;
