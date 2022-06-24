import axios from 'axios';

const endpoint = 'http://localhost:8080/movies';
export async function getMovies() {
  try {
    const response = await axios.get(endpoint);
    return response;
  }
  catch {
    console.log(`${endpoint} error`)
  }
};