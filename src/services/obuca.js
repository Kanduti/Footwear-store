import axios from "axios";
const baseUrl = "http://localhost:3003/api/obuca";


const get = async (path) => {
    const response =  await axios.get(baseUrl+path)
    console.log('data recived from server inside services', response.data)
    return response.data;
}


export default {get}