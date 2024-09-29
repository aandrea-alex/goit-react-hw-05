import { useState } from 'react';

const useFetchData = fetchFunction => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchData = async (...args) => {
    setLoading(true);
    setError(false);
    try {
      const result = await fetchFunction(...args);
      return result;
    } catch (error) {
      console.log(error.message);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return [loading, error, fetchData];
};

export default useFetchData;
