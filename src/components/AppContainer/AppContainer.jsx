import styles from './AppContainer.module.css';

const AppContainer = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};
export default AppContainer;
