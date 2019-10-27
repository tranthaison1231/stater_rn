import axios from 'axios';

export default axios.create({
  baseURL: process.env.URL,
  headers: {
    Authorization: `Bearer ${process.env.API_KEY}`,
  },
});
