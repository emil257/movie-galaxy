import axios from "axios";
export default axios.create({
  baseURL: `https://api.themoviedb.org/3/`,
  params: {api_key: '2ce5d470e8093da0bda93516898bb220'},
  headers: {  
      "Content-Type": "application/json",
    },
}); 