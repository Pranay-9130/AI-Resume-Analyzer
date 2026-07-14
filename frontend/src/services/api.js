import axios from "axios";

const API = axios.create({
  baseURL: "https://ai-resume-analyzer-ci2b.onrender.com",
});

export default API;