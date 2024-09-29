import AppContainer from '../../components/AppContainer/AppContainer';
import AppSection from '../../components/AppSection/AppSection';
import AppSecTitle from '../../components/AppSecTitle/AppSecTitle';
import styles from './NotFoundPage.module.css';

const NotFoundPage = () => {
  return (
    <AppContainer>
      <AppSection>
        <div className={styles.container}>
        <AppSecTitle>Page Not Found</AppSecTitle>
        </div>
      </AppSection>
    </AppContainer>
  );
};

export default NotFoundPage;
