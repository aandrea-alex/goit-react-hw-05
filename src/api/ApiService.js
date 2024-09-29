import axios from 'axios';
import { BASE_URL, API_KEY } from './constants';

export default class ApiService {
  static async getTrends() {
    try {
      const endPoint = 'trending/movie/day';
      const response = await axios.get(BASE_URL + endPoint, {
        params: {
          api_key: API_KEY,
          language: 'en-US',
          page: 1,
        },
      });
      return response.data.results;
    } catch (error) {
      console.log(error.message);
      return [];
    }
  }

  static async getMovieDetailsById(id, details = '') {
    try {
      let endPoint = `movie/${id}`;
      if (details) endPoint += `/${details}`;
      const response = await axios.get(BASE_URL + endPoint, {
        params: {
          api_key: API_KEY,
          language: 'en-US',
        },
      });
      return response.data;
    } catch (error) {
      console.log(error.message);
      return {};
    }
  }

  static async searchMovies(strQuery) {
    try {
      let endPoint = `search/movie`;
      const response = await axios.get(BASE_URL + endPoint, {
        params: {
          api_key: API_KEY,
          query: strQuery,
          language: 'en-US',
          page: 1,
        },
      });
      return response.data?.results;
    } catch (error) {
      console.log(error.message);
      return [];
    }
  }

  static async fetchConfiguration() {
    try {
      const response = await axios.get(BASE_URL + 'configuration', {
        params: {
          api_key: API_KEY,
        },
      });
      return response.data;
    } catch (error) {
      console.log(error.message);
      throw error;
    }
  }
}
