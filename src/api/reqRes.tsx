// Importamos axios
import axios from "axios";
// Creamos la funcion que permite llamar a la API y rescatar valores
export const reqResApi = axios.create({
    baseURL: 'https://reqres.in/api' 
});