import { useState, useEffect } from 'react';
import useFetchData from '../../hooks/useFetchData';
import AppContainer from '../../components/AppContainer/AppContainer';
import AppSection from '../../components/AppSection/AppSection';
import AppSecTitle from '../../components/AppSecTitle/AppSecTitle';
import ApiService from '../../api/ApiService';

const HomePage = () => {
  const [items, setItems] = useState([]);
  const [loading, error, fetchItemData] = useFetchData(async () => {
    const responce = await ApiService.getTrends();
    setItems(responce);
    console.log(responce);
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
        </AppSection>
    </AppContainer>
  );
};

export default HomePage;
