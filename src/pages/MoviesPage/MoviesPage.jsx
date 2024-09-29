
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import AppContainer from '../../components/AppContainer/AppContainer';
import AppSection from '../../components/AppSection/AppSection';
import SearchBar from '../../components/SearchBar/SearchBar';
import errNotify from '../../notifications/errorNotify';
import {ERR_EMPTY_SEARCH} from '../../notifications/constants';
import useFetchData from '../../hooks/useFetchData';
import ApiService from '../../api/ApiService';
// import InfinityLoader from '../../UI/loader/Infinity/Infinity';

const MoviesPage = () => {
  const [items, setItems] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const [loading, error, fetchItemData] = useFetchData(async filter => {
    const responce = await ApiService.searchMovies(filter);
    setItems(responce);
  });

  useEffect(() => {
    const strFilter = searchParams.get('search');
    strFilter && fetchItemData(strFilter);
  }, []);

  const handleSearch = strFilter => {
    if (strFilter === '') {
      errNotify(ERR_EMPTY_SEARCH);
      return;
    }
    fetchItemData(strFilter);
    setSearchParams({ search: strFilter });
  };

  return (
    <AppContainer>
      <AppSection>
      <SearchBar
          onSearch={handleSearch}
          initialValue={searchParams.get('search')}
        />
      <p>MoviesPage</p>
      </AppSection>
    </AppContainer>
  );
};

export default MoviesPage;
