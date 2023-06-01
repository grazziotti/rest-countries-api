import axios from "axios";

const http = axios.create({
  baseURL: "https://restcountries.com/v2"
});

export const api = {
  getAll: async () => {
    const response = await http.get("/all");
    return response.data;
  }
};
