import { Link } from 'react-router-dom';
import styles from './CustomLink.module.css';

const CustomLink = ({ to, children }) => {
  return (
    <Link className={styles.link} to={to}>
      <span className={styles.linkSpan}>{children}</span>
    </Link>
  );
};
export default CustomLink;
