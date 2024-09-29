import { BASE_IMG_URL } from '../../api/constants';

import styles from './MovieInfo.module.css';

const MovieInfo = ({
  item: { poster_path, original_title, overview, genres },
}) => {
  return (
    <div className={styles.section}>
      <div className={styles.wrapper}>
        <div className={styles.imgContainer}>
          <img
            className={styles.img}
            src={BASE_IMG_URL + '/w500/' + poster_path}
            alt={original_title}
          />
        </div>
        <div className={styles.infoContainer}>
          <h4 className={styles.title}>
            {original_title}
          </h4>
          <p>User Score: 73%</p>
          <h5 className={styles.subtitle}>Overview</h5>
          <p>{overview}</p>
          <h5 className={styles.subtitle}>Genres:</h5>
          <p>{genres && genres.map(({ name }) => name).join(' ')}</p>
        </div>
      </div>
    </div>
  );
};
export default MovieInfo;
