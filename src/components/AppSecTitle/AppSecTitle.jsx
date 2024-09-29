import styles from './AppSecTitle.module.css';

const AppSecTitle = ({ children }) => {
  return <h2 className={styles.title}>{children}</h2>;
};
export default AppSecTitle;
