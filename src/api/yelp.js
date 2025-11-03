import axios from axios;
import { config } from "dotenv";

config(); 

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers:{
     Authorization: `Bearer ${process.env.YELP_API_KEY}`,
  }
});