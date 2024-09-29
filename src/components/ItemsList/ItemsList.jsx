import { Link, useLocation } from 'react-router-dom';
import styles from './ItemsList.module.css';

const ItemsList = ({ items }) => {
  const location = useLocation();
  return (
    <ul className={styles.items}>
      {items.map(item => (
        <li className={styles.item} key={item.id}>
          <Link
            to={`/movies/${item.id}`}
            state={{ from: location }}
            className={styles.link}
          >
            <p>{item.title}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};
export default ItemsList;
