import axios from "axios";

const API = axios.create({
  baseURL: "ecommerce-backend-production-b680.up.railway.app/api"
});

export default API;
