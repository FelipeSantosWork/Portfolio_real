import axios from "axios";

const api = axios.create({
    baseURL: "https://felipesantosportfolio.com/",
    timeout: 5 * 1000
})

export { api }