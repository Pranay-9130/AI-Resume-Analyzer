import axios from "axios";

const API = axios.create({
  baseURL: "https://ai-resume-analyzer-gmhw.onrender.com",
});

export default API;