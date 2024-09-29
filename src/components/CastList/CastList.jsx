import CastItem from '../CastItem/CastItem';
import styles from './CastList.module.css';

const CastList = ({ items }) => {
  return (
    <ul className={styles.cast}>
      {items.map(item => (
        <li key={item.id}>
          <CastItem item={item} />
        </li>
      ))}
    </ul>
  );
};

export default CastList;
