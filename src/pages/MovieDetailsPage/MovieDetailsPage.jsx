import { useParams, NavLink, Outlet } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { useLocation } from 'react-router-dom';
import useFetchData from '../../hooks/useFetchData';
import ApiService from '../../api/ApiService';
import AppContainer from '../../components/AppContainer/AppContainer';
import AppSection from '../../components/AppSection/AppSection';
import AppSecTitle from '../../components/AppSecTitle/AppSecTitle';
import InfinityLoader from '../../components/Infinity/Infinity';
import MovieInfo from '../../components/MovieInfo/MovieInfo';
import CustomLink from '../../components/CustomLink/CustomLink';
import styles from './MovieDetails.module.css';

const MovieDetailsPage = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';

  const [itemLoading, itemError, fetchItemData] = useFetchData(async id => {
    const responce = await ApiService.getMovieDetailsById(id);
    setItem(responce);
  });

  useEffect(() => handleById(), []);

  const handleById = () => {
    fetchItemData(id);
  };

  return (
    <AppContainer>
       <AppSection>
       <CustomLink to={backLinkHref}>
          <FaArrowLeftLong />
          Back
        </CustomLink>
       <InfinityLoader isLoading={itemLoading} />
       {itemError ? <p>{itemError}</p> : <MovieInfo item={item} />}
    </AppSection>
    <AppSection>
        <AppSecTitle>Aditional information</AppSecTitle>
        <hr></hr>
        <nav className={styles.navLink}>
          <NavLink className={styles.link} to={`cast`} state={location.state}>
            Cast
          </NavLink>
          <NavLink
            className={styles.link}
            to={`reviews`}
            state={location.state}
          >
            Reviews
          </NavLink>
        </nav>
        <hr></hr>
        <Suspense fallback={<div>Loading subpage...</div>}>
          <Outlet />
        </Suspense>
      </AppSection>
    </AppContainer>
  );
};

export default MovieDetailsPage;
