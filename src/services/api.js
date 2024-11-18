import axios from "axios";

const CARBON_INTERFACE_API_KEY = "vaJ1D31Sd2YN73E0Anr1BA";
const CARBON_INTERFACE_API_URL = "https://www.carboninterface.com/api/v1";

export const api = axios.create({
  baseURL: CARBON_INTERFACE_API_URL,
  headers: { Authorization: `Bearer ${CARBON_INTERFACE_API_KEY}` },
});
