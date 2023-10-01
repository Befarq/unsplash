import axios from "axios";
const url =
  "https://api.unsplash.com/search/photos?client_id=nS0ZuWjRPItGjKojIhTKZfQi5O92kbah4bbgZY2Z2LU&page=1&query=books";
const searchReq = axios.create({ baseURL: url });
export default searchReq;
