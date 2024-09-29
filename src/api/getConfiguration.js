import { LOCAL_CONFIGURATION } from './constants';
import ApiService from './ApiService';

export const getConfiguration = async () => {
  const storedConfig = localStorage.getItem(LOCAL_CONFIGURATION);
  if (storedConfig) {
    return JSON.parse(storedConfig);
  }
  const tmdbConfig = await ApiService.fetchConfiguration();
  localStorage.setItem(LOCAL_CONFIGURATION, JSON.stringify(tmdbConfig));
  return tmdbConfig;
};
