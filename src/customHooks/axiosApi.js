import axios from "axios";

const CAT_API_URL = import.meta.env.VITE_CAT_API_URL;
const CAT_API_KEY = import.meta.env.VITE_CAT_API_KEY;

export const axiosCategories = axios.create({
  baseURL: CAT_API_URL,

  headers: {
    "x-api-key": CAT_API_KEY,
  },
});
