import axios from "axios";
import { authHeader } from "./authHeader";

// refactor: baseURL deberia ser una variable de entorno https://www.npmjs.com/package/dotenv
// todo: agregar headers con JWT usando local o session storage: https://www.robinwieruch.de/local-storage-react

const clienteAxios = axios.create({
  // baseURL: process.env.REACT_APP_HEROKU_API_URL || 'http://localhost:8080',
  baseURL: "https://viviendas-api.herokuapp.com",
  headers: authHeader(),
});

export default clienteAxios;
