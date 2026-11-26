import axios from "axios"

const url = import.meta.env.VITE_REST_API;
export const listEmployees = () => {
    return axios.get(url)
}