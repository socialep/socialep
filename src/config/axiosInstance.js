import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "API route"
});

export default axiosInstance
