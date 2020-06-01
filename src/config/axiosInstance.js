import axios from "axios";

//http://localhost:5000/socialep-3bdd5/us-central1/api/app
//https://us-central1-socialep-3bdd5.cloudfunctions.net/api/app
const axiosInstance = axios.create({
  baseURL: "https://us-central1-socialep-3bdd5.cloudfunctions.net/api/app",
});

export default axiosInstance;
