import axios  from "axios";
const axiosInstance= axios.create({
// baseURL:"http://127.0.0.1:5001/clone-50cd3/us-central1/api",
baseURL: "https://api-waod5xptja-uc.a.run.app/",
})



export {axiosInstance}