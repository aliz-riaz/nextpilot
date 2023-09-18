import axios from "axios";
// import configureStore from "../redux/store/store";

// const API_URL = process.env.NEXT_PUBLIC_VANTAGE_API;
const API_URL = "https://jsonplaceholder.typicode.com";

const instance = axios.create({
  baseURL: API_URL,
  headers: {
    // "Content-Type": "multipart/form-data",
    "Content-Type": "application/json",
  },
});

// instance.interceptors.request.use(
//   (config) => {
//     const token = "Asdasdasdasd"; // Replace with your actual token logic
//     config.headers.Authorization = `Bearer ${token}`;
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

export { instance };
