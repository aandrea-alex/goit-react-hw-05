
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useFetchData from '../../hooks/useFetchData';
import ApiService from '../../api/ApiService';
import InfinityLoader from '../Infinity/Infinity';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { NO_ELEMENTS } from '../ErrorMessage/constants';
import ReviewList from '../ReviewList/ReviewList';

const MovieReviews = () => {
  const { id } = useParams();
  const [items, setItems] = useState([]);

  const [loading, error, fetchReviewsData] = useFetchData(
    async (id, reviews = 'reviews') => {
      const responce = await ApiService.getMovieDetailsById(id, reviews);
      setItems(responce.results);
    }
  );

  useEffect(() => handleReviews(), []);

  const handleReviews = () => {
    fetchReviewsData(id);
  };
  return (
    <React.Fragment>
     <InfinityLoader isLoading={loading} />
      {error && <ErrorMessage />}

      {items.length > 0 ? (
        <ReviewList items={items} />
      ) : (
        <ErrorMessage msg={NO_ELEMENTS} />
      )}
    </React.Fragment>
  );
};

export default MovieReviews;
