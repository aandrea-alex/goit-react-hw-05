import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useFetchData from '../../hooks/useFetchData';
import ApiService from '../../api/ApiService';
import InfinityLoader from '../Infinity/Infinity';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import CastList from '../CastList/CastList';

const MovieCast = () => {
  const { id } = useParams();
  const [items, setItems] = useState([]);

  const [loading, error, fetchCreditsData] = useFetchData(
    async (id, credits = 'credits') => {
      const responce = await ApiService.getMovieDetailsById(id, credits);
      setItems(responce.cast);
    }
  );

  useEffect(() => handleCredits(), []);

  const handleCredits = () => {
    fetchCreditsData(id);
  };
  return (
    <React.Fragment>
      <InfinityLoader isLoading={loading} />
      {error && <ErrorMessage />}
      {items && <CastList items={items} />}
    </React.Fragment>
  );
};

export default MovieCast;
