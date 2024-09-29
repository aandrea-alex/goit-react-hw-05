import styles from './AppSection.module.css';

const AppSection = ({ children }) => {
  return <section className={styles.section}>{children}</section>;
};
export default AppSection;
