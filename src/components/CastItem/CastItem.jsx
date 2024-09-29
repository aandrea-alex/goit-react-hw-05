import styles from './CastItem.module.css';
import { BASE_IMG_URL } from '../../api/constants';

const CastItem = ({
  item: { original_name, profile_path, popularity, character },
}) => {
  return (
    <div className={styles.card}>
      <img
        className={styles.photo}
        src={BASE_IMG_URL + '/w200/' + profile_path}
        alt={original_name}
      />
      <div className={styles.info}>
        <p className={styles.name}>Name: {original_name}</p>
        <p className={styles.popularity}>Popularity: {popularity}</p>
        <p className={styles.role}>Role: {character}</p>
      </div>
    </div>
  );
};

export default CastItem;
