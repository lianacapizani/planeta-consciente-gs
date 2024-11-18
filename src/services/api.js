import axios from "axios";

const CARBON_INTERFACE_API_KEY = import.meta.env.VITE_CARBON_INTERFACE_API_KEY
const CARBON_INTERFACE_API_URL = import.meta.env.VITE_CARBON_INTERFACE_API_URL

export const api = axios.create({
  baseURL: CARBON_INTERFACE_API_URL,
  headers: { Authorization: `Bearer ${CARBON_INTERFACE_API_KEY}` },
});
