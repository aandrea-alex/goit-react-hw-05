import axios from 'axios';
import { BASE_URL, ACCESS_KEY } from './constants';

export const fetchData = async (searchStr, pageNum = 1) => {
  const axiosInstance = axios.create({
    baseURL: BASE_URL,
  });

  const apiParams = {
    client_id: ACCESS_KEY,
    page: pageNum,
    query: encodeURIComponent(searchStr),
    per_page: 10,
  };

  const endPoint = `/search/photos?${new URLSearchParams(
    apiParams
  ).toString()}`;

  try {
    const response = await axiosInstance.get(endPoint);
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};
