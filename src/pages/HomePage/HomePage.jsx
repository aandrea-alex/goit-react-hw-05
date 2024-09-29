import { useState, useEffect } from 'react';
import useFetchData from '../../hooks/useFetchData';
import AppContainer from '../../components/AppContainer/AppContainer';
import AppSection from '../../components/AppSection/AppSection';
import AppSecTitle from '../../components/AppSecTitle/AppSecTitle';
import ApiService from '../../api/ApiService';
import InfinityLoader from '../../components/Infinity/Infinity';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import ItemsList from '../../components/ItemsList/ItemsList';

const HomePage = () => {
  const [items, setItems] = useState([]);
  const [loading, error, fetchItemData] = useFetchData(async () => {
    const responce = await ApiService.getTrends();
    setItems(responce);
  });

  const handleLoadList = () => {
    fetchItemData();
  };

  useEffect(() => {
    handleLoadList();
  }, []);

  return (
    <AppContainer>
        <AppSection>
        <AppSecTitle>Trending today</AppSecTitle>
        <InfinityLoader isLoading={loading} />
        {error && <ErrorMessage />}
        <ItemsList items={items}></ItemsList>
        </AppSection>
    </AppContainer>
  );
};

export default HomePage;
